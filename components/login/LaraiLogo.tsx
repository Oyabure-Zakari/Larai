import React from "react";
import { Image, StyleSheet } from "react-native";

import { IMAGES } from "@/constants/images";

export default function LaraiLogo() {
  return <Image source={IMAGES.laraiLogo} style={styles.laraiLogo} />;
}

const styles = StyleSheet.create({
  laraiLogo: {
    width: 300,
    height: 150,
    resizeMode: "cover",
  },
});
