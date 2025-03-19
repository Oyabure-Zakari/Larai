import React from "react";
import { useEffect } from "react";

import { StyleSheet, Image, Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useExtractTextTranslationStore } from "@/store/useExtractTextTranslationStore";

import APIText from "@/components/translateImage/APIText";
import FloatingBtn from "@/components/translateImage/FloatingBtn";
import SelectLanguage from "@/components/translateImage/SelectLanguage";
import TranslateImageTextBtn from "@/components/translateImage/TranslateImageBtn";

export default function Translate() {
  const image = useExtractTextTranslationStore((state) => state.image);
  const error = useExtractTextTranslationStore((state) => state.error);

  useEffect(() => {
    if (error) {
      Alert.alert("Error", "Oops something went wrong try again", [
        { text: "OK" },
      ]);
    }
  }, [error]);

  return (
    <SafeAreaView style={styles.container}>
      {/* drop down menu to select a language */}
      <SelectLanguage />

      <View style={styles.topView}>
        {image && <Image source={{ uri: image }} style={styles.image} />}

        {/* button to translate the image text */}
        <TranslateImageTextBtn />
      </View>

      {/* response from the API */}
      <APIText />

      {/* floating button for both camera and device gallery */}
      <FloatingBtn />
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
    borderRadius: 10,
  },

  topView: {
    width: "100%",
    marginTop: 20,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
