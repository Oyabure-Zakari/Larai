import React from "react";
import { useEffect } from "react";
import {
  StatusBar,
  Platform,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/colors";

import DictionaryList from "@/components/dictionary/DictionaryList";
import HeaderText from "@/components/dictionary/HeaderText";
import TextFieldAndButton from "@/components/dictionary/TextFieldAndButton";

import { useDictionaryStore } from "@/store/useDictionaryStore";

export default function Dictionary() {
  const error = useDictionaryStore((state) => state.error);
  const isLoading = useDictionaryStore((state) => state.isLoading);

  useEffect(() => {
    error !== "" && Alert.alert("Error", error, [{ text: "OK" }]);
  }, [error]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryGrey} />

      {/* header text */}
      <HeaderText />

      {/* shows loading */}
      {isLoading && <ActivityIndicator size={"large"} color={COLORS.green} />}

      {/* displays the result of the searched word */}
      <DictionaryList />

      {/* textInput and send button */}
      <TextFieldAndButton />
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
});
