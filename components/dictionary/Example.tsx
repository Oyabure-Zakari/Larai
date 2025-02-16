import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { FONT_SIZE } from "@/constants/fonts";
import { COLORS } from "@/constants/colors";

// coming from RenderList Component
type ExampleProps = {
  example: string;
};

export default function Example({ example }: ExampleProps) {
  return (
    <View style={styles.exampleView}>
      <Text style={styles.exampleTitle}>Example</Text>
      <Text style={styles.exampleText}>• {example}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  exampleView: {
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  exampleTitle: {
    marginTop: 10,
    fontFamily: "segoeui_blackItalic",
    color: COLORS.primaryBlack,
    fontSize: FONT_SIZE.mainText_Seoge.small,
  },

  exampleText: {
    fontFamily: "consolas",
    color: COLORS.SecondaryBlack,
    fontSize: FONT_SIZE.mainText_Seoge.small,
    paddingBottom: 20,
  },
});
