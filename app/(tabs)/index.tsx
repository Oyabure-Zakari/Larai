import { StatusBar, Platform, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { FONT_SIZE } from "@/constants/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/colors";
import { View } from "react-native";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import axios from "axios";
import { FlatList } from "react-native";

type DefinitionItem = {
  definition: string;
  example: string;
};

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState<DefinitionItem[]>([]);
  const router = useRouter();
  const sendDictionary = async () => {
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
      setResults(response.data[0].definitions)
      // setWord("")
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryGrey} />
      <Text style={styles.text}>Dictionary</Text>
      <Text onPress={() => router.push("/auth")} style={styles.text2}>
        go to onboard
      </Text>

      {results.length > 0 && <Text style={styles.exampleTitle}>{word}</Text>}

      <FlatList
      data={results}
      keyExtractor={(_, index) => index.toString()} // Using index since there's no unique ID
      renderItem={({ item }) => (
        <View >
          
          <Text style={styles.definationTitle}>
            Defination
            <Text style={styles.exampleText}> • {item.definition}</Text>
          </Text>
          {item.example.trim() !== '' && (
            <>
            <Text style={styles.exampleTitle}>Example</Text>
            <Text style={styles.exampleText}>{item.example}</Text></>
          )}
        </View>
      )}
    />

      <View style={styles.back}>
        <TextInput
          style={styles.textInput}
          placeholder="dictionary"
          placeholderTextColor={COLORS.SecondaryBlack}
          value={word}
          onChangeText={setWord}
          multiline
        />

        <TouchableOpacity style={styles.sendBtn} onPress={sendDictionary}>
          <Ionicons name="send" size={20} color={COLORS.primaryBlack} />
        </TouchableOpacity>
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
  },

  text2: {
    fontSize: FONT_SIZE.mainText_Seoge.small,
    fontFamily: "Consolas",
  },

  back: {
    gap: 10,
    // height: 45,
    width: "100%",
    marginTop: "auto",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor:  "red",
  },
  
  definationTitle: {
    marginTop: 10,
    fontFamily: "segoeui_blackItalic",
    // color: COLORS.primaryBlack,
    color: COLORS.green,
    fontSize: FONT_SIZE.mainText_Seoge.small,
  },

  exampleTitle: {
    marginTop: 10,
    fontFamily: "segoeui_blackItalic",
    color: COLORS.primaryBlack,
    fontSize: FONT_SIZE.mainText_Seoge.small,
  },

  exampleText: {
    fontFamily: "consolas",
    color: COLORS.SecondaryBlack,
    fontSize: FONT_SIZE.mainText_Seoge.small,
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
