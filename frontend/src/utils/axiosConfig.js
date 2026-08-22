// src/utils/axiosConfig.js
import axios from "axios";
import { useAuthStore } from "../stores/authStore";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "",
  withCredentials: false,
});

// ✅ Automatically attach token from Zustand
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && !error.config?.url?.includes("/api/auth/")) {
      useAuthStore.getState().logout();
      if (window.location.pathname !== "/login") window.location.assign("/login");
    }
    return Promise.reject(error);
  },
);

export default apiClient;
