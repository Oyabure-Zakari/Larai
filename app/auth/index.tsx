import React from "react";
import {StatusBar} from 'react-native'

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
