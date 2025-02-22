import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fonts";

import { useTranslationStore } from "@/store/useTranslationStore";

export default function TranslationAPI() {
  const translation = useTranslationStore((state) => state.translation);

  return (
    <View style={styles.translationView}>
      <Text style={styles.translationText}>{translation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  translationView: {
    padding: 20,
    width: "90%",
    marginTop: 20,
    marginLeft: 16,
    alignSelf: "flex-start",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: COLORS.backgroundColor,
  },

  translationText: {
    textAlign: "left",
    fontFamily: "segoeui_blackItalic",
    color: COLORS.green,
    fontSize: FONT_SIZE.mainText_Seoge.small,
  },
});
