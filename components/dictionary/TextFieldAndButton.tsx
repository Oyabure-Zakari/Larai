import React from "react";
import { StyleSheet, View } from "react-native";

import TextField from "./TextField";
import SendWordBtn from "./SendWordBtn";

export default function TextFieldAndButton() {
  return (
    <View style={styles.textAndButtonView}>
      {/* input field */}
      <TextField />
      {/* button */}
      <SendWordBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  textAndButtonView: {
    gap: 10,
    // height: 45,
    width: "100%",
    marginTop: "auto",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 4,
    justifyContent: "space-between",
  },
});
