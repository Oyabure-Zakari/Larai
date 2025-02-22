import { StyleSheet, Text } from "react-native";
import React from "react";
import { FONT_SIZE } from "@/constants/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import { COLORS } from "@/constants/colors";


import { ScrollView } from "react-native";
import { useTranslationStore } from "@/store/useTranslationStore";
import { ActivityIndicator } from "react-native";
import { Alert } from "react-native";

import LanguagePicker from "@/components/translation/LanguagePIcker";
import TextAndButton from "@/components/translation/TextAndButton";

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
        {/* component for a user to select lanaguages to translate from & to */}
        <LanguagePicker/>

        {query.length > 0 && (
          <View style={styles.queryView}>
            <Text style={styles.queryText}>{query}</Text>
          </View>
        )}

        {translation.length > 0 && (
          <View style={styles.translationView}>
            <Text style={styles.translationText}>{translation}</Text>
          </View>
        )}
      </ScrollView>

      <TextAndButton/>

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

  queryView: {
    padding: 20,
    width: "90%",
    marginTop: 20,
    marginLeft: 16,
    alignSelf: "flex-end",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomRightRadius: 10,
  },

  queryText: {
    marginTop: 60,
    textAlign: "right",
    fontFamily: "segoeui_bold",
    color: COLORS.backgroundColor,
    fontSize: FONT_SIZE.consolas.small,
  },

  translationView: {
    padding: 20,
    width: "90%",
    marginTop: 20,
    marginLeft: 16,
    alignSelf: "flex-start",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: COLORS.backgroundColor,
  },

  translationText: {
    textAlign: "left",
    fontFamily: "segoeui_blackItalic",
    color: COLORS.green,
    fontSize: FONT_SIZE.mainText_Seoge.small,
  },
});
