import React from "react";
import { StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import Onboarding from "react-native-onboarding-swiper";

import { IMAGES } from "@/constants/images";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fonts";

import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import OnboardingImage from "@/components/onboarding/OnboardingImage";
import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";

import { doneButton, nextButton} from "./OnboardingButtons";

export default function OnboardingUI() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor={COLORS.backgroundGrey} />
      <Onboarding 
        bottomBarColor={COLORS.backgroundGrey}
        NextButtonComponent={nextButton}
        DoneButtonComponent={doneButton}
        pages={[
          {
            backgroundColor: COLORS.backgroundGrey,
            image: <OnboardingImage source={IMAGES.onboard1} />,
            title: <OnboardingTitle title={"Dictionary"} />,
            subtitle: <OnboardingSubtitle subTitle={
                  '" Unlock the meaning of every word with ease; your personal dictionary is now at your fingertips, ready to help you explore definitions, synonyms, and expand your vocabulary effortlessly. "'
                }
              />

          },

          {
            backgroundColor: COLORS.backgroundGrey,
            image: <OnboardingImage source={IMAGES.onboard2} />,
            title: <OnboardingTitle title={"Translate"} />,
            subtitle: <OnboardingSubtitle subTitle={
                  '" See it, scan it, and translate it effortlessly turn any image into text and understand the world around you in seconds. "'
                }
              />
          },

          {
            backgroundColor: COLORS.backgroundGrey,
            image: <OnboardingImage source={IMAGES.onboard3} />,
            title: <OnboardingTitle title={"Translation"} />,
            subtitle: <OnboardingSubtitle subTitle={
                  '" Break language barriers and communicate globally with instant translations that make understanding different languages simple and seamless. "'
                }
              />
          },
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  nextButton:{
    paddingRight: 16
  },

  text: {
    fontSize: FONT_SIZE.mainText_Seoge.large,
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
