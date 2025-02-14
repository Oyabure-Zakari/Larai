import React, { useEffect } from "react";
import { StatusBar, Platform, StyleSheet, Text, ActivityIndicator, View, TextInput, Alert } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { FONT_SIZE } from "@/constants/fonts";
import { COLORS } from "@/constants/colors";

import DictionaryList from "@/components/dictionary/DictionaryList";

import { useDictionaryStore } from "@/store/useDictionaryStore";
import SendWordBtn from "@/components/dictionary/SendWordBtn";

export default function Dictionary() {
  const router = useRouter();

  const word = useDictionaryStore((state) => state.word);
  const setWord = useDictionaryStore((state) => state.setWord);
  const error = useDictionaryStore((state) => state.error);
  const results = useDictionaryStore((state) => state.results);
  const isLoading = useDictionaryStore((state) => state.isLoading);

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

      <DictionaryList/>

      <View style={styles.textAndButtonView}>
        <TextInput
          style={styles.textInput}
          placeholder="dictionary"
          placeholderTextColor="grey"
          value={word}
          onChangeText={setWord}
        />

        {word.length > 0 && ( <SendWordBtn/>)}
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
});
