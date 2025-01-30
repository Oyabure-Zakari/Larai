import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import { IMAGES } from '@/constants/images'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '@/constants/colors'

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        pages={[
          {
            backgroundColor: COLORS.backgroundGrey,
            image: <Image source={IMAGES.onboard1} style={styles.image} />,
            title: "Dictionary",
            subtitle: '" Unlock the meaning of every word with ease; your personal dictionary is now at your fingertips, ready to help you explore definitions, synonyms, and expand your vocabulary effortlessly. "',
          },

          {
            backgroundColor: COLORS.backgroundGrey,
            image: <Image source={IMAGES.onboard2} style={styles.image} />,
            title: "Translate Image to Text",
            subtitle: '" See it, scan it, and translate it effortlessly turn any image into text and understand the world around you in seconds. "',
          },

          {
            backgroundColor: COLORS.backgroundGrey,
            image: <Image source={IMAGES.onboard3} style={styles.image} />,
            title: "Translation ",
            subtitle: '" Break language barriers and communicate globally with instant translations that make understanding different languages simple and seamless. "',
          },
          
          {
            backgroundColor: COLORS.backgroundGrey,
            image: <Image source={IMAGES.onboard4} style={styles.image} />,
            title: "Simplify Your  Login Experience!",
            subtitle: '" Connect with your Google account for a seamless, secure, and lightning-fast way to unlock all the powerful features dictionary, translation, and image to text tools right at your fingertips. "',
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

  image: {
    width:250,
    height: 250,
    resizeMode: "contain",
  }
})