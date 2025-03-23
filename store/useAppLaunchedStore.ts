import { TOKEN } from "@env";
import { create } from "zustand";
import { useAppLaunchedStoreType } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAppLaunchedStore = create<useAppLaunchedStoreType>((set) => ({
  token: "",
  error: "",
  isLoading: false,

  firstAppLaunch: async () => {
    set({ isLoading: true });
    try {
      if (!TOKEN) throw new Error("TOKEN is not defined")
      await AsyncStorage.setItem("@token", TOKEN);
      set({ token: TOKEN, isLoading: false });
      return { success: true };
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
      return { success: false };
    }
  },

  checkAppLaunch: async () => {
    try {
      const token = await AsyncStorage.getItem("@token");
      if (!token) return;
      set({ token: token });
    } catch (error: any) {
      set({ error: error.message });
    }
  },
}));
