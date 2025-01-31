import React from "react";
import { StyleSheet, Image } from "react-native";

// imported from onboardingUI component
type OnboardingImageProps = {
  source: { uri: string };
};

export default function OnboardImage({ source }: OnboardingImageProps) {
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
