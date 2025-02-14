import {create} from "zustand";
import axios from "axios";

type ResultsType = {
  definition: string;
  example: string;
};

type InitialState = {
  word: string;
  error:any;
  results: ResultsType[];
  isLoading: boolean;
  setWord: (word: string) => void;
  sendWord: (word: string) => Promise<void>;
};

export const useDictionaryStore = create<InitialState>((set) => ({
  word: "",
  error: "",
  results: [],
  isLoading: false,
  setWord: (word) => set({ word }),

  sendWord: async (word) => {
    set({isLoading: true});

    const options = {
      method: "GET",
      url: "https://word-dictionary-api1.p.rapidapi.com/api/WordDictionaryApi/",
      params: { word: `${word}` },
      headers: {
        "x-rapidapi-key": "bdb64cf2eemsh8a6592eeb408bcfp122f74jsn0e7790dcb96a",
        "x-rapidapi-host": "word-dictionary-api1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      set({results: response.data[0].definitions, error: "", isLoading: false});
    } catch (error) {
      set({error: error, isLoading: false});
    }
  }
}));