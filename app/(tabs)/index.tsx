import { StatusBar, Platform, StyleSheet, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { FONT_SIZE } from "@/constants/fonts";
import { COLORS } from "@/constants/colors";

import { View, TouchableOpacity, TextInput } from "react-native";
import {  } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import axios from "axios";

import DictionaryList from "@/components/dictionary/DictionaryList";

// type for the api results
type ResultsType = {
  definition: string;
  example: string;
};

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<ResultsType[]>([]);
  const router = useRouter();

  const sendWord = async () => {
    setIsLoading(true);

    const options = {
      method: "GET",
      url: "https://word-dictionary-api1.p.rapidapi.com/api/WordDictionaryApi/",
      params: { word: `${word}` },
      headers: {
        "x-rapidapi-key": "bdb64cf2eemsh8a6592eeb408bcfp122f74jsn0e7790dcb96a",
        "x-rapidapi-host": "word-dictionary-api1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data[0].definitions);
      setResults(response.data[0].definitions);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

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
          <TouchableOpacity style={styles.sendBtn} onPress={sendWord}>
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
