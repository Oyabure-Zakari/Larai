import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Glob from "@/components/login/Glob";
import WriteUp from "@/components/login/WriteUp";
import LoginBtn from "@/components/login/LoginBtn";
import LaraiLogo from "@/components/login/LaraiLogo";
import { StatusBar } from "react-native";
import { COLORS } from "@/constants/colors";


export default function LoginUI() {
  return (
    <ScrollView>
      <StatusBar backgroundColor={COLORS.backgroundGrey}/>
      <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <LaraiLogo />
          <Glob />
        </View>

        <View style={styles.bottomView}>
          <WriteUp />
          <LoginBtn />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  topView: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  bottomView: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
