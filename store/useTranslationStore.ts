import { create } from "zustand";
import axios from "axios";

import {
  TRANSLATION_API_URL,
  TRANSLATION_RAPID_API_HOST,
  TRANSLATION_RAPID_API_KEY,
} from "@env";

type useTranslationStoreType = {
  word: string;
  query: string;
  translation: string;
  isLoading: boolean;
  translateFrom: string;
  translateTo: string;
  error: any;

  setWord: (word: string) => void;
  setTranslateFrom: (translateFrom: string) => void;
  setTranslateTo: (translateTo: string) => void;

  sendBtn: (
    word: string,
    translateTo: string,
    translateFrom: string
  ) => Promise<void>;
};

export const useTranslationStore = create<useTranslationStoreType>((set) => ({
  word: "",
  query: "",
  error: "",
  translation: "",
  translateTo: "",
  translateFrom: "",
  isLoading: false,
  setWord: (word: string) => set({ word }),
  setTranslateFrom: (translateFrom: string) => set({translateFrom}),
  setTranslateTo: (translateTo: string) => set({translateTo}),

  sendBtn: async (word, translateTo, translateFrom) => {
    const options = {
      method: "POST",
      url: TRANSLATION_API_URL,
      params: {
        from: translateFrom,
        to: translateTo,
        query: word,
      },
      headers: {
        "x-rapidapi-key": TRANSLATION_RAPID_API_KEY,
        "x-rapidapi-host": TRANSLATION_RAPID_API_HOST,
        "Content-Type": "application/json",
      },
      data: {
        translate: "rapidapi",
      },
    };

    set({ isLoading: true });

    try {
      const response = await axios.request(options);
      console.log(response.data);
      set({
        query: response.data.query,
        translation: response.data.translation,
        word: "",
        error: "",
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
      set({
        query: "",
        translation: "",
        word: "",
        error: error,
        isLoading: false,
      });
    }
  },
}));
