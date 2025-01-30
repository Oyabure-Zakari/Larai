import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Dictionary() {
  return (
    <View style={styles.container}>
      <Text>Dictionary</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})