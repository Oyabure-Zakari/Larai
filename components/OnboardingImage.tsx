import React from "react";
import { StyleSheet, Image } from "react-native";

type OnboardingImageProps = {
  source: { uri: string };
};

export default function OnboardImage({ source }: OnboardingImageProps) {
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
