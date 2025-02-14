import React from "react";
import { StyleSheet, TextInput } from "react-native";

import { COLORS } from "@/constants/colors";

import { useDictionaryStore } from "@/store/useDictionaryStore";

export default function TextField() {
  const word = useDictionaryStore((state) => state.word);
  const setWord = useDictionaryStore((state) => state.setWord);

  return (
    <TextInput
      style={styles.textInput}
      placeholder="dictionary"
      placeholderTextColor="grey"
      value={word}
      onChangeText={setWord}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.secondaryGrey,
    marginLeft: 4,
    paddingLeft: 8,
  },
});
