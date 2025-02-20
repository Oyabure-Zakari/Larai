import { create } from "zustand";
import axios from "axios";

import {
  TRANSLATION_API_URL,
  TRANSLATION_RAPID_API_HOST,
  TRANSLATION_RAPID_API_KEY,
} from "@env";

import { useTranslationStoreType } from "@/types";

export const useTranslationStore = create<useTranslationStoreType>((set) => ({
  error: "",
  isLoading: false,

  // from text input, which is required parameter for the api
  word: "",

  // results gotten from the translation api
  query: "",
  translation: "",

  // from picker component gets the value the user selects, which is required parameter for the api
  translateTo: "",
  translateFrom: "",

  // actions to update the states
  setWord: (word: string) => set({ word }),
  setTranslateFrom: (translateFrom: string) => set({translateFrom}),
  setTranslateTo: (translateTo: string) => set({translateTo}),

  // button, which is a function that takes in word, translateTo and translateFrom as parameters
  translateBtn: async (word, translateTo, translateFrom) => {
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
