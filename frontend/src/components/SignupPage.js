import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👁️ Import eye icons
import { register } from "../services/authService";

function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    enrollment: "",
    branch: "",
    semester: "",
    dob: "",
    gender: "",
    goal: "",
    otherGoal: "",
    leetcode: "",
    github: "",
    skills: "",
    profilePic: null,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👁️ Eye toggle
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePic") {
      setFormData({ ...formData, profilePic: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const isFormValid = () => {
    const {
      name, email, password, enrollment, branch,
      semester, dob, gender, goal, otherGoal, leetcode, github, skills,
    } = formData;

    if (!name || !email || !password || !enrollment || !branch || !semester || !dob || !gender || !goal)
      return false;

    if (goal === "OTHERS" && !otherGoal) return false;
    if (goal === "PLACEMENT" && (!leetcode || !github || !skills)) return false;

    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!isFormValid()) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);

    const requestBody = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      enrollmentNumber: formData.enrollment,
      branch: formData.branch,
      currentSemester: parseInt(formData.semester),
      dateOfBirth: formData.dob,
      gender: formData.gender,
      goal: formData.goal,
      otherGoal: formData.otherGoal || "",
      leetcodeUrl: formData.leetcode || "",
      githubUrl: formData.github || "",
      skills: formData.skills || "",
      profilePictureUrl: null,
    };

    try {
      const { user, token } = await register(requestBody);
      setSession(user, token);

      navigate("/dashboard");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.response?.data?.error || "Signup failed";

      if (errorMessage.toLowerCase().includes("email already exists")) {
        setError("Email already exists. Redirecting to login...");
        setTimeout(() => navigate("/login"), 2500);
      } else {
        setError("Signup failed: " + errorMessage);
      }

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />

          {/* 👁️ Password with eye toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <input type="text" name="enrollment" placeholder="Enrollment Number" required value={formData.enrollment} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />

          <div className="flex gap-4">
            <select name="branch" value={formData.branch} onChange={handleChange} className="w-1/2 px-4 py-2 border rounded-lg" required>
              <option value="">Select Branch</option>
              <option value="ECE">ECE</option>
              <option value="IT">IT</option>
            </select>
            <select name="semester" value={formData.semester} onChange={handleChange} className="w-1/2 px-4 py-2 border rounded-lg" required>
              <option value="">Select Semester</option>
              {[3, 4, 5, 6].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />

          <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <select name="goal" value={formData.goal} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg">
            <option value="">Select Goal</option>
            <option value="PLACEMENT">Placement</option>
            <option value="UPSC">UPSC</option>
            <option value="GATE">GATE</option>
            <option value="CAT">CAT</option>
            <option value="OTHERS">Others</option>
          </select>

          {/* Conditional fields */}
          {formData.goal === "OTHERS" && (
            <input type="text" name="otherGoal" placeholder="Please specify" value={formData.otherGoal} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
          )}

          {formData.goal === "PLACEMENT" && (
            <>
              <input type="url" name="leetcode" placeholder="LeetCode URL" value={formData.leetcode} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              <input type="url" name="github" placeholder="GitHub URL" value={formData.github} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg" />
            </>
          )}

          <button type="submit" disabled={loading} className={`w-full ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} text-white py-2 rounded-lg transition`}>
            {loading ? "Registering..." : "Sign Up"}
          </button>

          {error && <p className="text-red-600 text-sm text-center mt-2">{error}</p>}
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
