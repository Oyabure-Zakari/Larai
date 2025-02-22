import React from "react";

import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/constants/colors";

import { useTranslationStore } from "@/store/useTranslationStore";

export default function TextAndButton() {
  const word = useTranslationStore((state) => state.word);
  const setWord = useTranslationStore((state) => state.setWord);

  const translateFrom = useTranslationStore((state) => state.translateFrom);
  const translateTo = useTranslationStore((state) => state.translateTo);

  const translateBtn = useTranslationStore((state) => state.translateBtn);

  return (
    <View style={styles.textAndButtonView}>
      <TextInput
        style={styles.textInput}
        multiline={true}
        placeholder="translate"
        placeholderTextColor="grey"
        value={word}
        onChangeText={setWord}
      />

      {word && translateFrom && translateTo && (
        <TouchableOpacity
          style={styles.translateBtn}
          onPress={() => translateBtn(word, translateFrom, translateTo)}
        >
          <Ionicons name="send" size={20} color={COLORS.primaryBlack} />
        </TouchableOpacity>
      )}
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
    //backgroundColor: "red",
  },

  textInput: {
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.secondaryGrey,
    marginLeft: 4,
    paddingLeft: 8,
  },

  translateBtn: {
    width: "10%",
    height: 35,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
