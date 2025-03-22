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

  // the word the user types in the text field, & is a requirement for the api
  word: "",

  // states to hold api results
  query: "",
  translation: "",

  // picker component which allows user to select a language, & are requirements for the api
  translateFrom: "",
  translateTo: "",

  // actions to update the states
  setWord: (word) => set({ word }),
  setTranslateFrom: (language) => set({ translateFrom: language }),
  setTranslateTo: (language) => set({ translateTo: language }),

  // is a function which takes in word, translateFrom and translateTo as parameters, to be used as part of the requirement for the api call
  translateBtn: async (word, translateFrom, translateTo) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(
        TRANSLATION_API_URL,
        {
          from: translateFrom,
          to: translateTo,
          query: word,
        },
        {
          headers: {
            "x-rapidapi-key": TRANSLATION_RAPID_API_KEY,
            "x-rapidapi-host": TRANSLATION_RAPID_API_HOST,
            "Content-Type": "application/json",
          },
        }
      );

      set({
        query: response.data.query,
        translation: response.data.translation,
        word: "",
        error: "",
        isLoading: false,
      });
    } catch (error:any) {
      console.error(error);
      set({ isLoading: false, error: error.message });
    }
  },
}));
