import { create } from "zustand";
import axios from "axios";

import {
  DICTIONARY_API_URL,
  DICTIONARY_RAPID_API_KEY,
  DICTIONARY_RAPID_API_HOST,
} from "@env";

import { DictionaryStore } from "@/types";

export const useDictionaryStore = create<DictionaryStore>((set) => ({
  word: "",
  error: "",
  results: [],
  isLoading: false,
  setWord: (word) => set({ word }),

  sendWord: async (word) => {
    set({ isLoading: true });

    const options = {
      method: "GET",
      url: DICTIONARY_API_URL,
      params: { word: `${word}` },
      headers: {
        "x-rapidapi-key": DICTIONARY_RAPID_API_KEY,
        "x-rapidapi-host": DICTIONARY_RAPID_API_HOST,
      },
    };

    try {
      const response = await axios.request(options);
      set({
        results: response.data[0].definitions,
        error: "",
        isLoading: false,
      });
    } catch (error) {
      set({ error: error, isLoading: false });
    }
  },
}));
