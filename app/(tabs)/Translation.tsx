import { StyleSheet, Text } from "react-native";
import React from "react";
import { FONT_SIZE } from "@/constants/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import { TextInput } from "react-native";
import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { ScrollView } from "react-native";
import { useTranslationStore } from "@/store/useTranslationStore";
import { ActivityIndicator } from "react-native";
import { Alert } from "react-native";
import TranslateFrom from "@/components/translation/TranslateFrom";
import TranslateTo from "@/components/translation/TranslateTo";

export default function Translation() {
  const word = useTranslationStore((state) => state.word);
  const setWord = useTranslationStore((state) => state.setWord);

  const query = useTranslationStore((state) => state.query);
  const translation = useTranslationStore((state) => state.translation);

  const translateFrom = useTranslationStore((state) => state.translateFrom);
  const translateTo = useTranslationStore((state) => state.translateTo);

  const isLoading = useTranslationStore((state) => state.isLoading);
  const error = useTranslationStore((state) => state.error);

  const translateBtn = useTranslationStore((state) => state.translateBtn);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Translation</Text>

      {/* shows loading */}
      {isLoading && <ActivityIndicator size={"large"} color={COLORS.green} />}

      {error && Alert.alert("Error", error, [{ text: "OK" }])}

      <ScrollView>
        {/* translate from */}
        <TranslateFrom/>

        {/* translate to */}
        <TranslateTo/>

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

      <View style={styles.textAndButtonView}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="translate"
          placeholderTextColor="grey"
          value={word}
          onChangeText={setWord}
        />

        {(word && translateFrom && translateTo) && (
          <TouchableOpacity
          style={styles.sendBtn}
          onPress={() => translateBtn(word, translateFrom, translateTo)}
        >
          <Ionicons name="send" size={20} color={COLORS.primaryBlack} />
        </TouchableOpacity>
        )}

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

  textAndButtonView: {
    gap: 10,
    // height: 45,
    width: "100%",
    marginTop: "auto",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    //backgroundColor: "red",
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
