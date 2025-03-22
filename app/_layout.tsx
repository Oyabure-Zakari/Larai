import React from "react";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Stack, useRouter, useSegments } from "expo-router";

import { StatusBar } from "react-native";
import { COLORS } from "@/constants/colors";
import { useAppLaunchedStore } from "@/store/useAppLaunchedStore";

// prevent the splash screen from auto-hiding before assets load
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();

  const token = useAppLaunchedStore((state) => state.token);
  const checkAppLaunch = useAppLaunchedStore((state) => state.checkAppLaunch);

  const [fontsLoaded] = useFonts({
    consolas: require("../assets/fonts/Consolas-Bold.ttf"),
    segoeui_bold: require("../assets/fonts/segoe-ui-bold.ttf"),
    segoeui_blackItalic: require("../assets/fonts/seguibli.ttf"),
  });

  useEffect(() => {
    checkAppLaunch(); // Check token on mount
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      // Only navigate after fonts are loaded and Stack is rendered
      const hasLaunchedApp = token;
      const isInOnboardingScreen = segments[0] === "(onboarding)";

      if (!hasLaunchedApp && !isInOnboardingScreen) router.replace("/(onboarding)");
      else if (hasLaunchedApp && isInOnboardingScreen) router.replace("/(tabs)");
      
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, token, segments]);

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
    </Stack>
  );
}
