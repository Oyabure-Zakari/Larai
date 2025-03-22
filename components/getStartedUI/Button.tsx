import React from "react";

import {StyleSheet, Text, TouchableOpacity} from "react-native";

import { useRouter } from "expo-router";

import { FONT_SIZE } from "@/constants/fonts";
import { COLORS } from "@/constants/colors";
import { Alert } from "react-native";
import { useAppLaunchedStore } from "@/store/useAppLaunchedStore";


export default function Button() {
  const router = useRouter();
  const firstAppLaunch = useAppLaunchedStore((state) => state.firstAppLaunch);
  const error = useAppLaunchedStore((state) => state.error);
  
  const handleAppLaunch = async () => {
    const result = await firstAppLaunch();
    !result.success && Alert.alert("Error", error);
  };

  return (
    <TouchableOpacity
      style={styles.loginBtn}
      // onPress={() => router.push("/(tabs)")}
      onPress={handleAppLaunch}
    >
      <Text style={styles.loginText}>Get started</Text>
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
    backgroundColor:  COLORS.backgroundColor,
  },

  googleImg: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },

  loginText: {
    textAlign: "center",
    fontFamily: "consolas",
    color: COLORS.green,
    fontSize: FONT_SIZE.consolas.small,
  },
});
