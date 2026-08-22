import apiClient from "../utils/axiosConfig";

const toSession = (data) => ({
  token: data.token,
  user: {
    name: data.name, email: data.email, branch: data.branch,
    currentSemester: data.currentSemester, goal: data.goal,
    enrollmentNumber: data.enrollmentNumber, role: data.role,
  },
});

export async function login(credentials) {
  const { data } = await apiClient.post("/api/auth/login", credentials);
  return toSession(data);
}

export async function register(payload) {
  const { data } = await apiClient.post("/api/auth/register", payload);
  return toSession(data);
}
