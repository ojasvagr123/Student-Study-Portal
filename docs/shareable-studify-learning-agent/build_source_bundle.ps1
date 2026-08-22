param(
    [string]$RepositoryRoot = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path,
    [string]$OutputPath = (Join-Path $PSScriptRoot 'STUDIFY_SOURCE_BUNDLE.md')
)

$ErrorActionPreference = 'Stop'

$includedRoots = @(
    'README.md',
    'backend/build.gradle',
    'backend/settings.gradle',
    'backend/src/main/java',
    'backend/src/test',
    'frontend/package.json',
    'frontend/src',
    'database/schema.sql'
)

$allowedExtensions = @('.java', '.js', '.jsx', '.ts', '.tsx', '.json', '.gradle', '.sql', '.md', '.css')
$files = foreach ($relativeRoot in $includedRoots) {
    $candidate = Join-Path $RepositoryRoot $relativeRoot
    if (Test-Path -LiteralPath $candidate -PathType Leaf) {
        Get-Item -LiteralPath $candidate
    } elseif (Test-Path -LiteralPath $candidate -PathType Container) {
        Get-ChildItem -LiteralPath $candidate -Recurse -File |
            Where-Object { $allowedExtensions -contains $_.Extension.ToLowerInvariant() }
    }
}

$files = $files | Sort-Object FullName -Unique
$builder = [System.Text.StringBuilder]::new()
[void]$builder.AppendLine('# Studify sanitized source bundle')
[void]$builder.AppendLine()
[void]$builder.AppendLine('Generated from the repository for learning, code walkthroughs, and interview preparation. Secret-bearing runtime configuration is intentionally excluded. Verify historical or deployment claims against the current repository.')

foreach ($file in $files) {
    $relative = [System.IO.Path]::GetRelativePath($RepositoryRoot, $file.FullName).Replace('\', '/')
    $extension = $file.Extension.TrimStart('.').ToLowerInvariant()
    if ($extension -eq 'gradle') { $extension = 'groovy' }
    [void]$builder.AppendLine()
    [void]$builder.AppendLine("## $relative")
    [void]$builder.AppendLine()
    [void]$builder.AppendLine(('```' + $extension))
    $content = Get-Content -Raw -LiteralPath $file.FullName
    $content = $content -replace '\$\{jwt\.secret:[^}]+\}', '${jwt.secret:REDACTED}'
    [void]$builder.AppendLine($content)
    [void]$builder.AppendLine('```')
}

[System.IO.File]::WriteAllText($OutputPath, $builder.ToString(), [System.Text.UTF8Encoding]::new($false))
Write-Output "Created $OutputPath from $($files.Count) files."
