import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FONT_SIZE } from "@/constants/fonts";
import { COLORS } from "@/constants/colors";

// imported from onboard component
type OnboardingSubtitleProps = {
  subTitle: string;
};

export default function OnboardingSubtitle({ subTitle }: OnboardingSubtitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 20,
  },

  text: {
    fontSize: FONT_SIZE.mainText_Seoge.small,
    fontFamily: "segoeui_bold",
    color: COLORS.SecondaryBlack,
    textAlign: "center"
  },
});