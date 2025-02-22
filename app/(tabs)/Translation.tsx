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

import { useTranslationStore } from "@/store/useTranslationStore";

import SelectLanguage from "@/components/translation/SelectLanguage";
import Loading from "@/components/translation/Loading";

export default function Translation() {
  const query = useTranslationStore((state) => state.query);
  const translation = useTranslationStore((state) => state.translation);

  const isLoading = useTranslationStore((state) => state.isLoading);
  const error = useTranslationStore((state) => state.error);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Translation</Text>

      {/* shows error */}
      {error && Alert.alert("Error", error, [{ text: "OK" }])}

      <ScrollView>
        {/* a component for a user to select lanaguages to translate from & to */}
        <SelectLanguage />

        {/* shows loading */}
        {isLoading && <Loading/>}

        {/* shows the query result from the api */}
        {query && <QueryAPI />}

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
