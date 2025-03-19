import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { COLORS } from "@/constants/colors";

import { useExtractTextTranslationStore } from "@/store/useExtractTextTranslationStore";

export default function APIText() {
  const translatedText = useExtractTextTranslationStore(
    (state) => state.translatedText
  );

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.bottomView}>
        {translatedText && <Text style={styles.apiText}>{translatedText}</Text>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: "95%",
  },

  bottomView: {
    paddingVertical: 20,
  },

  apiText: {
    fontSize: 16,
    fontFamily: "segoeui_bold",
    color: COLORS.backgroundColor,
  },
});
