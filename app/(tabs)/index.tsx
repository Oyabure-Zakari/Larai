import React from "react";
import {
  StatusBar,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/colors";

import ShowError from "@/components/dictionary/ShowError";
import ShowLoading from "@/components/dictionary/ShowLoading";
import DictionaryImg from "@/components/dictionary/DictionaryImg";
import DictionaryList from "@/components/dictionary/DictionaryList";
import TextFieldAndButton from "@/components/dictionary/TextFieldAndButton";

export default function Dictionary() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primaryGrey} />
      
      <DictionaryImg/>

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
