import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TranslateFrom from './TranslateFrom'
import TranslateTo from './TranslateTo'

export default function SelectLanguage() {
  return (
    <>
      {/* a component for a user to select a lanaguage to translate from*/}
      <TranslateFrom/>
      {/* a component for a user to select a lanaguage to translate to*/}
      <TranslateTo/>
    </>
  )
}

const styles = StyleSheet.create({})