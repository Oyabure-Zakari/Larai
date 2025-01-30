import React from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";

// prevent the splash screen from auto-hiding before assets load
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    consolas: require("../assets/fonts/Consolas-Bold.ttf"),
    segoeui_bold: require("../assets/fonts/segoe-ui-bold.ttf"),
    segoeui_blackItalic: require("../assets/fonts/seguibli.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  
  return (
  <Stack>
    <StatusBar style="dark"/>
    <Stack.Screen name="index" options={{headerShown:false}}/>
    <Stack.Screen name="(tabs)"/>
  </Stack>
);
}
