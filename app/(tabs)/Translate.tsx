import React, { useEffect } from "react";

import { StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/colors";

import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { Alert } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";

import { useExtractTextTranslationStore } from "@/store/useExtractTextTranslationStore";
import FloatingBtn from "@/components/translateImage/FloatingBtn";
import SelectLanguage from "@/components/translateImage/SelectLanguage";
import TranslateImageBtn from "@/components/translateImage/TranslateImageBtn";
import TranslateImageTextBtn from "@/components/translateImage/TranslateImageBtn";

export default function Translate() {
const image = useExtractTextTranslationStore ((state) => state.image);
const translatedText = useExtractTextTranslationStore ((state) => state.translatedText);
const error = useExtractTextTranslationStore ((state) => state.error);

  useEffect(() => {
    if (error) {
      Alert.alert("Error", "Oops something went wrong try again", [{ text: "OK" }]);
    }
  }, [error]);

  return (
    <SafeAreaView style={styles.container}> 
      <SelectLanguage/>

      <View style={styles.topView}>
        {image && <Image source={{ uri: image }} style={styles.image} />}

        <TranslateImageTextBtn/>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.bottomView}>
          {translatedText && <Text style={styles.apiText}>{translatedText}</Text>}
        </View>
      </ScrollView>
      
      <FloatingBtn/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  translateToView: {
    gap: 25,
    height: 40,
    width: "95%",
    marginTop: 50,
    alignItems: "center",
    flexDirection: "row",
  },

  toText: {
    fontSize: 15,
    fontFamily: "segoeui_blackItalic",
  },

  picker: {
    height: 60,
    width: "80%",
    marginLeft: 10,
    backgroundColor: COLORS.secondaryGrey,
  },

  image: {
    width: "95%",
    height: 200,
    marginTop: 20,
    borderRadius: 10
  },



  scrollView: {
    width: "95%",
  },

  topView: {
    width: "100%",
    marginTop: 20,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomView: {
    paddingVertical: 20,
  },

  apiText: {
    fontSize: 16,
    fontFamily: "segoeui_bold",
    color: COLORS.backgroundColor,
  },
});