import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fonts";

export default function WriteUp() {
  return (
    <>
      <Text style={styles.title}>Simplify Your {"\n"} Login Experience!</Text>

      <View style={styles.subTitleView}>
        <Text style={styles.subTitle}>
          " Connect with your Google account for a seamless, secure, and
          lightning-fast way to unlock all the powerful features dictionary,
          translation, and image to text tools right at your fingertips. "
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
