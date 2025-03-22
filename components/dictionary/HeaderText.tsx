import React from "react";
import { StyleSheet, Text } from "react-native";

import { FONT_SIZE } from "@/constants/fonts";
import { useDictionaryStore } from "@/store/useDictionaryStore";

export default function HeaderText() {
  const word = useDictionaryStore((state) => state.word);
  const results = useDictionaryStore((state) => state.results);

  return (
    <Text style={styles.text}>
      {results.length > 0 ? word : "Dictionary"}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZE.mainText_Seoge.large,
    fontFamily: "segoeui_bold",
    paddingVertical: 10,
  },
});
