import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { FONT_SIZE } from '@/constants/fonts'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Dictionary() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Text style={styles.text}>Dictionary</Text>
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
  }
})