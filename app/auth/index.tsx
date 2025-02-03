import React from "react";
import { StatusBar } from "expo-status-bar";

import { COLORS } from "@/constants/colors";
import OnboardingUI from "@/components/onboarding/OnboardingUI";

export default function index() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.backgroundGrey}/>
      <OnboardingUI />
    </>
  )
}
