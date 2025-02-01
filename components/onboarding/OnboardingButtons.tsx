import React from 'react'
import { Button } from 'react-native'
import { StyleSheet, View } from 'react-native'

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

export const doneButton = ({...props}) => {
  return (
    <View style={styles.button}>
      <Button 
        title="Get Started" color={COLORS.primaryBlack}
        {...props}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    paddingRight: 16
  },

})