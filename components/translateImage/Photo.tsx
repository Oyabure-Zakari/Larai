import React from "react";
import { StyleSheet, Image, View } from "react-native";

import { useExtractTextTranslationStore } from "@/store/useExtractTextTranslationStore";

export default function Photo() {
  const image = useExtractTextTranslationStore((state) => state.image);

  return (
    image && (
      <View>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  image: {
    width: "95%",
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
});
