import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDictionaryStore } from "@/store/useDictionaryStore";
import TextField from "./TextField";
import SendWordBtn from "./SendWordBtn";

export default function TextFieldAndButton() {
  const word = useDictionaryStore((state) => state.word);

  return (
    <View style={styles.textAndButtonView}>
      <TextField />

      {word.length > 0 && <SendWordBtn />}
    </View>
  );
}

const styles = StyleSheet.create({
  textAndButtonView: {
    gap: 10,
    // height: 45,
    width: "100%",
    marginTop: "auto",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
});
