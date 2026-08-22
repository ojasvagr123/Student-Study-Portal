import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { login } from "../services/authService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { user, token } = await login({ email, password });
      setSession(user, token);

      navigate(user.role === "ADMIN" ? "/admin" : "/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to sign in");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          Welcome Back
        </h2>

        {error && (
          <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
