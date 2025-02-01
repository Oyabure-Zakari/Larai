import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONT_SIZE } from '@/constants/fonts'
import { StatusBar } from 'expo-status-bar'

export default function Dictionary() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.text}>Dictionary</Text>
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