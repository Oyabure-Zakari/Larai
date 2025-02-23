import React from 'react'
import { ActivityIndicator, StyleSheet,View } from 'react-native'

import { COLORS } from '@/constants/colors'
import { useDictionaryStore } from '@/store/useDictionaryStore';

export default function ShowLoading() {
  const isLoading = useDictionaryStore((state) => state.isLoading);

  return (
    <View>
      {isLoading && <ActivityIndicator size={"large"} color={COLORS.green} />}
    </View>
  )
}

const styles = StyleSheet.create({})