import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FONT_SIZE } from "@/constants/fonts";

// imported from onboard component
type OnboardingTitleProps = {
  title: string;
};

export default function OnboardingTitle({ title }: OnboardingTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },

  text: {
    fontSize: FONT_SIZE.mainText_Seoge.large,
    fontFamily: "segoeui_blackItalic",
    textAlign: "center"
  },
});
