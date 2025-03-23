import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { IMAGES } from "@/constants/images";
import { useDictionaryStore } from "@/store/useDictionaryStore";

export default function DictionaryImg() {
  const word = useDictionaryStore((state) => state.word);

  return (
    <>
      {!word && ( 
        <>
          <View style={styles.v}></View>
          <Image source={IMAGES.dictionary} style={styles.bookImg} />
          <Text style={styles.text}>search for words</Text>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  v: {
    flex: 1,
  },

  bookImg: {
    width: 250,
    height: 250,
    resizeMode: "cover",
  },

  text: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    fontFamily: "segoeui_bold",
  },
});
