import axios from "axios";
import { create } from "zustand";

import {
  CLOUD_NAME,
  UPLOAD_PRESET,
  OCR_EXTRACT_TEXT_API_URL,
  OCR_EXTRACT_TEXT_RAPID_API_KEY,
  OCR_EXTRACT_TEXT_RAPID_API_HOST,
} from "@env";
import { ExtractTextTranslationStoreType } from "@/types";


export const useExtractTextTranslationStore = create<ExtractTextTranslationStoreType>((set) => ({
  error: "",
  text: "",
  image: "",
  imageUrl: "",
  translateTo: "",
  isLoading: false,

  setTranslateTo: (language) => set({translateTo: language}),
}));
