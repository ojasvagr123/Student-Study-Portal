import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function AdminRoute({ children }) {
  const { token, user } = useAuthStore();
  if (!token) return <Navigate to="/login" replace />;
  if (user?.role !== "ADMIN") return <Navigate to="/dashboard" replace />;
  return children;
}
