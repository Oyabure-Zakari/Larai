import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fonts";

// coming from RenderList Component
type DefinitionProps = {
  definition: string;
};

export default function Definition({ definition }: DefinitionProps) {
  return (
    <View style={styles.definitionView}>
      <Text style={styles.definitionTitle}>Definition</Text>
      <Text style={styles.definitionText}>{definition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  definitionView: {
    width: "100%",
    padding: 10,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: COLORS.backgroundColor,
  },

  definitionTitle: {
    fontFamily: "segoeui_blackItalic",
    color: COLORS.green,
    fontSize: FONT_SIZE.mainText_Seoge.small,
  },

  definitionText: {
    fontFamily: "consolas",
    color: COLORS.secondaryGrey,
    fontSize: FONT_SIZE.consolas.small,
  },
});
