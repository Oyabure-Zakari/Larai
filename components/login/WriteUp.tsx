import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fonts";

export default function WriteUp() {
  return (
    <>
      <Text style={styles.title}>Welcome aboard!</Text>

      <View style={styles.subTitleView}>
        <Text style={styles.subTitle}>
          " Unlock a world of words, seamless translations, and powerful
          image-to-text scanning—all at your fingertips. Explore, learn, and
          connect like never before. "
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    textAlign: "center",
    fontFamily: "segoeui_blackItalic",
    fontSize: FONT_SIZE.mainText_Seoge.large,
  },

  subTitleView: {
    width: "85%",
    paddingVertical: 20,
  },

  subTitle: {
    textAlign: "center",
    fontFamily: "segoeui_bold",
    color: COLORS.SecondaryBlack,
    fontSize: FONT_SIZE.mainText_Seoge.small,
  },
});
