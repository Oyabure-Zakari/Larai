import React from "react";
import { StyleSheet, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { SafeAreaView } from "react-native-safe-area-context";

import { IMAGES } from "@/constants/images";
import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fonts";
import OnboardingImage from "@/components/OnboardingImage";
import OnboardingTitle from "@/components/OnboardingTitle";

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        pages={[
          {
            backgroundColor: COLORS.backgroundGrey,
            image: <OnboardingImage source={IMAGES.onboard1} />,
            title: <OnboardingTitle title={"Dictionary"} />,
            subtitle: (
              <Text>
                " Unlock the meaning of every word with ease; your personal
                dictionary is now at your fingertips, ready to help you explore
                definitions, synonyms, and expand your vocabulary effortlessly.
                "
              </Text>
            ),
          },

          {
            backgroundColor: COLORS.backgroundGrey,
            image: <OnboardingImage source={IMAGES.onboard2} />,
            title: <OnboardingTitle title={"Translate"} />,
            subtitle: (
              <Text>
                " See it, scan it, and translate it effortlessly turn any image
                into text and understand the world around you in seconds. "
              </Text>
            ),
          },

          {
            backgroundColor: COLORS.backgroundGrey,
            image: <OnboardingImage source={IMAGES.onboard3} />,
            title: <OnboardingTitle title={"Translation"} />,
            subtitle: (
              <Text>
                " Break language barriers and communicate globally with instant
                translations that make understanding different languages simple
                and seamless. "
              </Text>
            ),
          },

          {
            backgroundColor: COLORS.backgroundGrey,
            image: <OnboardingImage source={IMAGES.onboard4} />,
            title: (
              <OnboardingTitle title={"Simplify Your Login Experience!"} />
            ),
            subtitle: (
              <Text>
                " Connect with your Google account for a seamless, secure, and
                lightning-fast way to unlock all the powerful features
                dictionary, translation, and image to text tools right at your
                fingertips. "
              </Text>
            ),
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

  text: {
    fontSize: FONT_SIZE.mainText_Seoge.large,
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
