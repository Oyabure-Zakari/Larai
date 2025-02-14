import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/constants/colors";
import { useDictionaryStore } from "@/store/useDictionaryStore";

export default function SendWordBtn() {
  const word = useDictionaryStore((state) => state.word);
  const sendWord = useDictionaryStore((state) => state.sendWord);

  return (
    <TouchableOpacity style={styles.sendBtn} onPress={() => sendWord(word)}>
      <Ionicons name="send" size={20} color={COLORS.primaryBlack} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sendBtn: {
    width: "10%",
    height: 35,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
