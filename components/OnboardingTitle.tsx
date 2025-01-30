import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FONT_SIZE } from "@/constants/fonts";

type OnboardingTitleProps = {
  title: string;
};

export default function OnboardingTitle({ title }: OnboardingTitleProps) {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZE.mainText_Seoge.large,
    fontFamily: "segoeui_blackItalic",
    textAlign: "center"
  },
});
