import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useExtractTextTranslationStore } from "@/store/useExtractTextTranslationStore";
import { Image } from 'react-native-elements';

export default function TransnlateImage() {
  const image = useExtractTextTranslationStore ((state) => state.image);
  return (
    <>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "95%",
    height: 200,
    marginTop: 20,
    borderRadius: 10
  },
})