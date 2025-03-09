import axios from "axios";
import { create } from "zustand";
import * as ImagePicker from "expo-image-picker";
import { Cloudinary } from "@cloudinary/url-gen";
import { upload } from "cloudinary-react-native";

import { ExtractTextTranslationStoreType } from "@/types";

import {
  CLOUD_NAME,
  UPLOAD_PRESET,
  OCR_EXTRACT_TEXT_API_URL,
  OCR_EXTRACT_TEXT_RAPID_API_KEY,
  OCR_EXTRACT_TEXT_RAPID_API_HOST,
} from "@env";

export const useExtractTextTranslationStore = create<ExtractTextTranslationStoreType>((set, get) => ({
    error: "",
    image: "",
    imageUrl: "",
    translateTo: "",
    translatedText: "",
    isLoading: false,

    setTranslateTo: (language) => set({ translateTo: language }),

    takePhoto: async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: "images",
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        set({ image: result.assets[0].uri });
      }
    },

    pickImage: async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        set({ image: result.assets[0].uri });
      }
    },

    extractTextAndTranslate: async () => {
      // get access to image & translateTo initial state
      const { image, imageUrl, translateTo } = get();

      if (!image) {
        set({ error: "No image selected" });
        return;
      }

      set({ isLoading: true });

      const cld = new Cloudinary({
        cloud: {
          cloudName: CLOUD_NAME,
        },
        url: {
          secure: true,
        },
      });

      const options = {
        upload_preset: UPLOAD_PRESET,
        unsigned: true,
      };

      try {
        await upload(cld, {
          file: image,
          options: options,
          callback: (error: any, response: any) => {
            //.. handle response
            if (response) {
              set({ imageUrl: response.url });
              console.log(response.url);
            } else {
              set({ error });
              console.log("from cloudinary", error);
            }
          },
        });

        if (!imageUrl) {
          set({ error: "Failed to get image URL", isLoading: false });
          return;
        }

        // OCR API call
        const apiOptions = {
          method: "GET",
          url: OCR_EXTRACT_TEXT_API_URL,
          params: {
            url: imageUrl,
            dest: translateTo,
          },
          headers: {
            "x-rapidapi-key": OCR_EXTRACT_TEXT_RAPID_API_KEY,
            "x-rapidapi-host": OCR_EXTRACT_TEXT_RAPID_API_HOST,
          },
        };
        const response = await axios.request(apiOptions);
        set({
          error: "",
          isLoading: false,
          translatedText: response.data.text,
        });
      } catch (error: any) {
        console.log("Error during upload or API call:", error);
        set({
          error: error.message || "An error occurred",
          isLoading: false,
          translatedText: "",
        });
      }
    },
}));
