import {StatusBar, Platform, StyleSheet, Text} from 'react-native'
import React from 'react'
import { FONT_SIZE } from '@/constants/fonts'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { COLORS } from '@/constants/colors'
import { View } from 'react-native'
import { TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'



export default function Dictionary() {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.backgroundGrey}/>
      <Text style={styles.text}>Dictionary</Text>
      <Text onPress={() => router.push("/auth")} style={styles.text2}>go to onboard</Text>

      <View style={styles.back}>
        <TextInput style={styles.textInput}
          placeholder='dictionary'
          placeholderTextColor={COLORS.SecondaryBlack}
          multiline
        />
        <View style={styles.sendBtn}>
          <Ionicons 
            name="send"
            size={20}
            color={COLORS.primaryBlack}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
  },

  text: {
    fontSize: FONT_SIZE.mainText_Seoge.large,
    fontFamily: "segoeui_bold"
  },

  text2: {
    fontSize: FONT_SIZE.mainText_Seoge.small,
    fontFamily: "Consolas"
  },

    back: {
      gap: 10,
      // height: 45,
      width: "100%",
      marginTop: "auto",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      // backgroundColor:  "red",
    },

    textInput: {
      width:"85%",
      borderRadius: 10,
      backgroundColor:  COLORS.secondaryGrey,
      marginLeft: 4,
      paddingLeft: 8,
    },
  
    sendBtn: {
      width:"10%",
      height: 35,
      borderRadius: 10,
      backgroundColor: COLORS.green,
      marginRight: 4,
      justifyContent: "center",
      alignItems: "center"
    },
  

})