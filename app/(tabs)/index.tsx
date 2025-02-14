import React from "react";
import { useEffect } from "react";
import { StatusBar, Platform, StyleSheet, ActivityIndicator, View, Alert } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/colors";

import DictionaryList from "@/components/dictionary/DictionaryList";
import SendWordBtn from "@/components/dictionary/SendWordBtn";
import HeaderText from "@/components/dictionary/HeaderText";
import TextField from "@/components/dictionary/TextField";

import { useDictionaryStore } from "@/store/useDictionaryStore";

export default function Dictionary() {
  const word = useDictionaryStore((state) => state.word);
  const error = useDictionaryStore((state) => state.error);
  const isLoading = useDictionaryStore((state) => state.isLoading);

  useEffect(() => {
    error !== "" && Alert.alert("Error",error, [{text: "OK"}])
  }, [error])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryGrey} />

      <HeaderText/>

      {isLoading && <ActivityIndicator size={"large"} color={COLORS.green} />}

      <DictionaryList/>

      <View style={styles.textAndButtonView}>
        <TextField/>

        {word.length > 0 && <SendWordBtn/>}
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
