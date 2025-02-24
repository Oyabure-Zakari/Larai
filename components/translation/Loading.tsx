import React from 'react'

import { StyleSheet, View } from 'react-native'
import { ActivityIndicator } from 'react-native'

import { COLORS } from '@/constants/colors'

import { useTranslationStore } from '@/store/useTranslationStore';

export default function Loading() {
  const isLoading = useTranslationStore((state) => state.isLoading);

  return (
    <View style={styles.Loading}> 
      {isLoading && <ActivityIndicator size={"large"} color={COLORS.green} />}
    </View>
  )
}

const styles = StyleSheet.create({
  Loading: {
    marginTop: 60,
  }
})