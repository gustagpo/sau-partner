import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";
import { api } from "../lib/axios";
import { toast } from "react-hot-toast";

export const useAuth = create((set, get) => ({
  user: null,
  rank: null,
  isLoadingUser: false,
  isAuthenticated: false,

  async getUser() {
    set({ isLoadingUser: true });

    const response = await api.get("/partners");

    set({
      user: response.data.partner,
      isLoadingUser: false,
      isAuthenticated: true,
    });
  },

  async signIn(data) {
    const { getUser } = get();

    try {
      const response = await api.post("/partners/login", {
        document: data.document,
        password: data.password,
      });

      const { token, rank } = response.data;

      console.log(rank);

      set({ rank });

      Cookies.set("@sau_benefits_token", token, { path: "/", expires: 7 });

      api.defaults.headers.Authorization = `Bearer ${token}`;

      await getUser();

      window.location.href = "/";
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          toast.error("Usuário e/ou senha incorretos!");
        }
      }
    }
  },

  signOut() {
    Cookies.remove("@sau_benefits_token");
    set({ isAuthenticated: false });

    window.location.href = "/login";
  },
}));
