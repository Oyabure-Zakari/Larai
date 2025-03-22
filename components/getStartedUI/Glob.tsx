import React from "react";
import { Image, StyleSheet } from "react-native";

import { IMAGES } from "@/constants/images";

export default function Glob() {
  return <Image source={IMAGES.onboard4} style={styles.glob} />;
}

const styles = StyleSheet.create({
  glob: {
    width: 250,
    height: 250,
    resizeMode: "cover",
  },
});
