CREATE TABLE branches (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    code VARCHAR(255) UNIQUE
);

CREATE TABLE semester (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    email_verified BOOLEAN NOT NULL DEFAULT FALSE,
    role VARCHAR(32) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    branch VARCHAR(255),
    enrollment_number VARCHAR(255) UNIQUE,
    current_semester INTEGER,
    gender VARCHAR(255),
    goal VARCHAR(32),
    other_goal VARCHAR(255),
    leetcode_url VARCHAR(500),
    github_url VARCHAR(500),
    skills VARCHAR(1000),
    date_of_birth DATE,
    semester_id BIGINT REFERENCES semester(id)
);

CREATE TABLE subjects (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    code VARCHAR(255),
    branch_id BIGINT REFERENCES branches(id),
    semester INTEGER NOT NULL
);

CREATE TABLE units (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    subject_id BIGINT REFERENCES subjects(id)
);

CREATE TABLE resources (
    id BIGSERIAL PRIMARY KEY,
    unit_id BIGINT REFERENCES units(id),
    type VARCHAR(32),
    title VARCHAR(255),
    url VARCHAR(1000)
);

CREATE TABLE pyq (
    id BIGSERIAL PRIMARY KEY,
    unit_id BIGINT REFERENCES units(id),
    question_text VARCHAR(1000),
    pdf_url VARCHAR(1000)
);

CREATE TABLE career_resource (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255),
    url VARCHAR(1000),
    type VARCHAR(32),
    goal VARCHAR(32)
);

CREATE TABLE quiz_question (
    id BIGSERIAL PRIMARY KEY,
    goal VARCHAR(32),
    question VARCHAR(1000),
    correct_answer VARCHAR(1000)
);

CREATE TABLE quiz_question_options (
    quiz_question_id BIGINT NOT NULL REFERENCES quiz_question(id) ON DELETE CASCADE,
    options VARCHAR(1000)
);

CREATE TABLE striver_topic (
    id BIGSERIAL PRIMARY KEY,
    topic VARCHAR(255),
    link VARCHAR(1000),
    attempted BOOLEAN NOT NULL DEFAULT FALSE,
    user_id BIGINT REFERENCES users(id)
);

CREATE TABLE contributions (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(2000),
    type VARCHAR(255),
    subject VARCHAR(255),
    visibility VARCHAR(255),
    url VARCHAR(1000),
    file_url VARCHAR(1000),
    upvotes INTEGER NOT NULL DEFAULT 0,
    downvotes INTEGER NOT NULL DEFAULT 0,
    bookmarks INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP,
    user_id BIGINT REFERENCES users(id)
);

CREATE TABLE comments (
    id BIGSERIAL PRIMARY KEY,
    comment_text VARCHAR(2000),
    timestamp TIMESTAMP,
    user_id BIGINT REFERENCES users(id),
    context_type VARCHAR(64),
    context_id BIGINT
);

CREATE TABLE pyq_comment (
    id BIGSERIAL PRIMARY KEY,
    pyq_id BIGINT REFERENCES pyq(id),
    user_id BIGINT REFERENCES users(id),
    comment_text VARCHAR(2000),
    timestamp TIMESTAMP
);

CREATE TABLE todos (
    id BIGSERIAL PRIMARY KEY,
    text VARCHAR(500) NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_subject_branch_semester ON subjects(branch_id, semester);
CREATE INDEX idx_unit_subject ON units(subject_id);
CREATE INDEX idx_resource_unit ON resources(unit_id);
CREATE INDEX idx_pyq_unit ON pyq(unit_id);
CREATE INDEX idx_comment_context ON comments(context_type, context_id);
CREATE INDEX idx_contribution_user ON contributions(user_id);
CREATE INDEX idx_todo_user ON todos(user_id);
CREATE UNIQUE INDEX idx_striver_user_topic ON striver_topic(user_id, topic);
