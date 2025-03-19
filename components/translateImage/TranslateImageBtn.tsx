import React from "react";
import {
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { COLORS } from "@/constants/colors";

import { useExtractTextTranslationStore } from "@/store/useExtractTextTranslationStore";

export default function TranslateImageTextBtn() {
  const image = useExtractTextTranslationStore((state) => state.image);
  const isLoading = useExtractTextTranslationStore((state) => state.isLoading);
  const translateTo = useExtractTextTranslationStore(
    (state) => state.translateTo
  );
  const extractTextAndTranslate = useExtractTextTranslationStore(
    (state) => state.extractTextAndTranslate
  );

  return (
    <>
      {image && translateTo && (
        <TouchableOpacity
          disabled={isLoading}
          onPress={extractTextAndTranslate}
          style={styles.translateTextBtn}
        >
          {isLoading ? (
            <ActivityIndicator size={"small"} color={COLORS.green} />
          ) : (
            <Text style={styles.textBtn}>Translate text</Text>
          )}
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  translateTextBtn: {
    height: 40,
    width: "40%",
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.backgroundColor,
  },

  textBtn: {
    color: COLORS.green,
    fontFamily: "segoeui_bold",
  },
});
