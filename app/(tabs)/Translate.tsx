import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONT_SIZE } from '@/constants/fonts'

export default function Translate() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Translate</Text>
    </View>
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