import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { FONT_SIZE } from '@/constants/fonts'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Translation() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Translation</Text>
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