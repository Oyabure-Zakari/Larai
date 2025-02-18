import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { FONT_SIZE } from "@/constants/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import { TextInput } from "react-native";
import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Translation() {
  const [translation, setTranslation] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Translation</Text>

      <View style={styles.textAndButtonView}>
        <TextInput
          style={styles.textInput}
          placeholder="dictionary"
          placeholderTextColor="grey"
          value={translation}
          onChangeText={setTranslation}
        />

<TouchableOpacity style={styles.sendBtn}>
      <Ionicons name="send" size={20} color={COLORS.primaryBlack} />
    </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  text: {
    fontSize: FONT_SIZE.mainText_Seoge.large,
    fontFamily: "segoeui_bold",
  },

  textAndButtonView: {
    gap: 10,
    // height: 45,
    width: "100%",
    marginTop: "auto",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    backgroundColor: "red",

  },

  textInput: {
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.secondaryGrey,
    marginLeft: 4,
    paddingLeft: 8,
  },

  sendBtn: {
    width: "10%",
    height: 35,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
