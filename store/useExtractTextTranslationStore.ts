import axios from "axios";
import { create } from "zustand";
import * as ImagePicker from "expo-image-picker";
import { Cloudinary } from "@cloudinary/url-gen";
import { upload } from "cloudinary-react-native";

import {
  CLOUD_NAME,
  UPLOAD_PRESET,
  OCR_EXTRACT_TEXT_API_URL,
  OCR_EXTRACT_TEXT_RAPID_API_KEY,
  OCR_EXTRACT_TEXT_RAPID_API_HOST,
} from "@env";

import { ExtractTextTranslationStoreType } from "@/types";

export const useExtractTextTranslationStore =
  create<ExtractTextTranslationStoreType>((set) => ({
    error: "",
    text: "",
    image: "",
    imageUrl: "",
    translateTo: "",
    isLoading: false,

    setTranslateTo: (language) => set({ translateTo: language }),

    // function to take a picture using expo image picker
    takePhoto: async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: "images",
        allowsEditing: true,
        // aspect: [4, 3],
        quality: 1,
      });

      !result.canceled && set({ image: result.assets[0].uri });
    },

    // function to take a picture from the gallery using expo image picker
    pickImage: async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        allowsEditing: true,
        // aspect: [4, 3],
        quality: 1,
      });

      !result.canceled && set({ image: result.assets[0].uri });
    },

    // function to extract and translate the text to the language selected by the user
    translateText: async (image, imageUrl, translateTo) => {
      set({ isLoading: true });

      // cloudinary
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

      // ocr extract text api
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

      try {
        const response = await axios.request(apiOptions);
        set({ text: response.data.text });
        set({ isLoading: false });
      } catch (error: any) {
        console.log("from api", error);
        set({ error });
        set({ isLoading: false });
      }
    },
  }));
