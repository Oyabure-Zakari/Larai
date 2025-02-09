
import React from "react";
import { useState } from "react";

import { Image, StyleSheet, Text, TouchableOpacity} from "react-native";

import { auth, provider } from "@/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

import { useRouter } from "expo-router";

import { IMAGES } from "@/constants/images";
import { FONT_SIZE } from "@/constants/fonts";
import { COLORS } from "@/constants/colors";
import { ActivityIndicator } from "react-native";
import { isLoading } from "expo-font";


export default function LoginBtn() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  // const logInWithGoogle = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await signInWithPopup(auth, provider);
  //     console.log(response);
  //     setIsLoading(false);
  //   } catch (error: any) {
  //     setIsLoading(true)
  //     console.log(error.message);
  //     setIsLoading(false)
  //   }
  // };

  if (isLoading) {
    return (
      <ActivityIndicator/>
    )
  }

  return (
    <TouchableOpacity
      style={styles.loginBtn}
      onPress={() => router.push("/(tabs)")}
      // onPress={logInWithGoogle}
      // disabled={isLoading}
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
