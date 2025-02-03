import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { FONT_SIZE } from '@/constants/fonts'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

export default function Dictionary() {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Dictionary</Text>
      <Text onPress={() => router.push("/auth")} style={styles.text2}>go to onboard</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: FONT_SIZE.mainText_Seoge.large,
    fontFamily: "segoeui_bold"
  },

  text2: {
    fontSize: FONT_SIZE.mainText_Seoge.small,
    fontFamily: "Consolas"
  }
})