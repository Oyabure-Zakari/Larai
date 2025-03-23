import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/constants/colors";
import { useDictionaryStore } from "@/store/useDictionaryStore";

export default function SendWordBtn() {
  const word = useDictionaryStore((state) => state.word);
  const sendWord = useDictionaryStore((state) => state.sendWord);

  return (
    <TouchableOpacity
    disabled={!word}
    onPress={() => sendWord(word)}
    style={[styles.sendBtn, !word && styles.disabledBtn]}
    >
      <Ionicons name="send" size={20} color={COLORS.SecondaryBlack} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  disabledBtn: {
    width: "10%",
    height: 35,
    marginRight: 4,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "grey",
    justifyContent: "center",
  },

  sendBtn: {
    height: 35,
    width: "10%",
    marginRight: 4,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.green,
  },
});
