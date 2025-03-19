import React, { useEffect } from "react";

import { StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/colors";

import { Alert } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";

import { useExtractTextTranslationStore } from "@/store/useExtractTextTranslationStore";

import FloatingBtn from "@/components/translateImage/FloatingBtn";
import SelectLanguage from "@/components/translateImage/SelectLanguage";
import TranslateImageTextBtn from "@/components/translateImage/TranslateImageBtn";
import APIText from "@/components/translateImage/APIText";

export default function Translate() {
const image = useExtractTextTranslationStore ((state) => state.image);
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
      
      <APIText/>

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

  image: {
    width: "95%",
    height: 200,
    marginTop: 20,
    borderRadius: 10
  },

  topView: {
    width: "100%",
    marginTop: 20,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});