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

import ShowError from "@/components/dictionary/ShowError";
import HeaderText from "@/components/dictionary/HeaderText";
import ShowLoading from "@/components/dictionary/ShowLoading";
import DictionaryList from "@/components/dictionary/DictionaryList";
import TextFieldAndButton from "@/components/dictionary/TextFieldAndButton";

export default function Dictionary() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryGrey} />

      {/* header text */}
      <HeaderText />

      {/* shows error */}
      <ShowError/>

      {/* shows loading */}
      <ShowLoading/>

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
