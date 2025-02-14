import { StatusBar, Platform, StyleSheet, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { FONT_SIZE } from "@/constants/fonts";
import { COLORS } from "@/constants/colors";

import { View, TouchableOpacity, TextInput } from "react-native";
import {  } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import axios from "axios";

import DictionaryList from "@/components/dictionary/DictionaryList";
import { Alert } from "react-native";
import { useDictionaryStore } from "@/store/useDictionaryStore";

// type for the api results
type ResultsType = {
  definition: string;
  example: string;
};

export default function Dictionary() {
  const router = useRouter();

  const word = useDictionaryStore((state) => state.word);
  const setWord = useDictionaryStore((state) => state.setWord);
  const error = useDictionaryStore((state) => state.error);
  const results = useDictionaryStore((state) => state.results);
  const isLoading = useDictionaryStore((state) => state.isLoading);
  const sendWord = useDictionaryStore((state) => state.sendWord);

  useEffect(() => {
    error !== "" && Alert.alert("Error",error, [{text: "OK"}])
  }, [error])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryGrey} />
      <Text style={styles.text} onPress={() => router.push("/auth")}>
        {results.length > 0 ? word : "Dictionary"}
      </Text>

      {isLoading && <ActivityIndicator size={"large"} color={COLORS.green} />}

      <DictionaryList results={results}/>

      <View style={styles.textAndButtonView}>
        <TextInput
          style={styles.textInput}
          placeholder="dictionary"
          placeholderTextColor="grey"
          value={word}
          onChangeText={setWord}
        />

        {word.length > 0 && (
          <TouchableOpacity style={styles.sendBtn} onPress={() => sendWord(word)}>
            <Ionicons name="send" size={20} color={COLORS.primaryBlack} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  text: {
    fontSize: FONT_SIZE.mainText_Seoge.large,
    fontFamily: "segoeui_bold",
    paddingVertical: 10,
  },

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

  textInput: {
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.secondaryGrey,
    marginLeft: 4,
    paddingLeft: 8,
  },

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
