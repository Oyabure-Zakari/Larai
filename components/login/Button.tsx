import React from "react";

import {StyleSheet, Text, TouchableOpacity} from "react-native";

import { useRouter } from "expo-router";

import { FONT_SIZE } from "@/constants/fonts";
import { COLORS } from "@/constants/colors";

export default function Button() {
  const router = useRouter();


  return (
    <TouchableOpacity
      style={styles.loginBtn}
      onPress={() => router.push("/(tabs)")}
    >
      <Text style={styles.loginText}>Let's get started</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    gap: 20,
    height: 45,
    width: "90%",
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor:  COLORS.primaryBlack,
  },

  googleImg: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },

  loginText: {
    textAlign: "center",
    fontFamily: "consolas",
    color: COLORS.secondaryGrey,
    fontSize: FONT_SIZE.consolas.small,
  },
});
