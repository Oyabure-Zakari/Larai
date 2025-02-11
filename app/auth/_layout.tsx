import React from "react";
import { Stack } from "expo-router";
import { COLORS } from "@/constants/colors";
import { StatusBar } from "react-native";

export default function AuthLayout() {

  return (
    <Stack>
      <StatusBar backgroundColor={COLORS.backgroundGrey}/>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="GetStarted" options={{ headerShown: false}} />
    </Stack>
  );
}