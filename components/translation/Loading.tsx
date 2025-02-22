import React from 'react'

import { StyleSheet, View } from 'react-native'
import { ActivityIndicator } from 'react-native'

import { COLORS } from '@/constants/colors'

export default function Loading() {
  return (
    <View style={styles.Loading}> 
      <ActivityIndicator size={"large"} color={COLORS.green} />
    </View>
  )
}

const styles = StyleSheet.create({
  Loading: {
    marginTop: 60,
  }
})