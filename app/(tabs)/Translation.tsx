import React from "react";
import {
  Text,
  Alert,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fonts";

import QueryAPI from "@/components/translation/QueryAPI";
import TranslationAPI from "@/components/translation/TranslationAPI";
import LanguagePicker from "@/components/translation/LanguagePIcker";
import TextAndButton from "@/components/translation/TextAndButton";

import { useTranslationStore } from "@/store/useTranslationStore";

export default function Translation() {

  const query = useTranslationStore((state) => state.query);
  const translation = useTranslationStore((state) => state.translation);

  const isLoading = useTranslationStore((state) => state.isLoading);
  const error = useTranslationStore((state) => state.error);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Translation</Text>

      {/* shows loading */}
      {isLoading && <ActivityIndicator size={"large"} color={COLORS.green} />}

      {/* shows error */}
      {error && Alert.alert("Error", error, [{ text: "OK" }])}

      <ScrollView>
        {/* a component for a user to select lanaguages to translate from & to */}
        <LanguagePicker />

        {/* shows the query result from the api */}
        {query.length > 0 && <QueryAPI />}

        {/* shows the translation result from the api */}
        {translation.length > 0 && <TranslationAPI/>}
      
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

  text: {
    fontFamily: "segoeui_bold",
    fontSize: FONT_SIZE.mainText_Seoge.large,
  },
});
