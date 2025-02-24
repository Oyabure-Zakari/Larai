import React from "react";
import {
  Text,
  Alert,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { FONT_SIZE } from "@/constants/fonts";

import QueryAPI from "@/components/translation/QueryAPI";
import TranslationAPI from "@/components/translation/TranslationAPI";
import TextAndButton from "@/components/translation/TextAndButton";


import Loading from "@/components/translation/Loading";
import APIError from "@/components/translation/APIError";
import SelectLanguage from "@/components/translation/SelectLanguage";

import { useTranslationStore } from "@/store/useTranslationStore";

export default function Translation() {
  const translation = useTranslationStore((state) => state.translation);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Translation</Text>

      {/* shows error */}
      <APIError/>

      <ScrollView>
        {/* a component for a user to select lanaguages to translate from & to */}
        <SelectLanguage />

        {/* shows loading */}
        <Loading/>

        {/* shows the query result from the api */}
        <QueryAPI />

        {/* shows the translation result from the api */}
        {translation && <TranslationAPI />}
      </ScrollView>

      {/* text input and button */}
      <TextAndButton />
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

  headerText: {
    fontFamily: "segoeui_bold",
    fontSize: FONT_SIZE.mainText_Seoge.large,
  },
});
