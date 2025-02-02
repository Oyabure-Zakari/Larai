import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity} from "react-native";

import { IMAGES } from "@/constants/images";
import { FONT_SIZE } from "@/constants/fonts";
import { COLORS } from "@/constants/colors";
import { useRouter } from "expo-router";

export default function LoginBtn() {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.loginBtn}
      onPress={() => router.push("/(tabs)")}
    >
      <Image source={IMAGES.googleIcon} style={styles.googleImg} />
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    gap: 20,
    height: 45,
    width: "90%",
    marginTop: 20,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.primaryBlack,
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
