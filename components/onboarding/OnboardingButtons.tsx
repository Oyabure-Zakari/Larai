import React from 'react'
import { Button } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { useRouter } from 'expo-router'

import { COLORS } from '@/constants/colors'

export const nextButton = ({...props}) => {
  return (
    <View style={styles.button}>
      <Button 
        title="Next" color={COLORS.primaryBlack}
        {...props}
        />
    </View>
  )
}


export const doneButton = () => {
  const router = useRouter()
  return (
    <View style={styles.button}>
      <Button 
        onPress={() => router.push("/(tabs)")}
        title="Get Started" color={COLORS.primaryBlack}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    paddingRight: 16
  },

})