import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FONT_SIZE } from "@/constants/fonts";
import { COLORS } from "@/constants/colors";

type OnboardingSubtitleProps = {
  subTitle: string;
};

export default function OnboardingSubtitle({ subTitle }: OnboardingSubtitleProps) {
  return (
    <View>
      <Text style={styles.text}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZE.mainText_Seoge.small,
    fontFamily: "segoeui_bold",
    color: COLORS.SecondaryBlack,
    textAlign: "center"
  },
});