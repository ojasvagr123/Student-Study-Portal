import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      setSession: (user, token) => set({ user, token }),
      setUser: (user, token) => set({ user, token }),
      updateUser: (user) => set((state) => ({ user, token: state.token })),
      logout: () => set({ user: null, token: null }),
    }),
    { name: "studify-session", partialize: ({ user, token }) => ({ user, token }) },
  ),
);
