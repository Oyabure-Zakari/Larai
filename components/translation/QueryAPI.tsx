import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fonts";
import { useTranslationStore } from "@/store/useTranslationStore";

export default function QueryAPI() {
  const query = useTranslationStore((state) => state.query);

  return (
    <View style={styles.queryView}>
      <Text style={styles.queryText}>{query}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  queryView: {
    padding: 20,
    width: "90%",
    marginTop: 20,
    marginLeft: 16,
    alignSelf: "flex-end",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomRightRadius: 10,
  },

  queryText: {
    marginTop: 60,
    textAlign: "right",
    fontFamily: "segoeui_bold",
    color: COLORS.backgroundColor,
    fontSize: FONT_SIZE.consolas.small,
  },
});
