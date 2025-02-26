import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { FONT_SIZE } from '@/constants/fonts'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FloatingAction } from "react-native-floating-action";
import { Alert } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { COLORS } from '@/constants/colors';

const actions = [
  {
    text: "Camera",
    icon: <FontAwesome name="camera" size={20} color={COLORS.backgroundColor} />,
    name: "bt_Camera",
    position: 1,
    color: COLORS.secondaryGrey
  },
  {
    text: "Gallery",
    icon: <Entypo name="folder-images" size={20} color={COLORS.backgroundColor} />,
    name: "bt_Gallery",
    position: 2,
    color: COLORS.secondaryGrey
  },
];

export default function Translate() {
  const handlePress = (name?:string) => {
    switch (name) {
      case "bt_Camera":
        Alert.alert("Camera button pressed!");
        break;
      case "bt_Gallery":
        Alert.alert("Gallery button pressed!");
        break;
      default:
        console.log(`Unknown button: ${name}`);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Translate</Text>
      <FloatingAction floatingIcon={<MaterialCommunityIcons name="image-auto-adjust" size={35} color={COLORS.backgroundColor} />} color={COLORS.green} actions={actions} onPressItem={handlePress}/>
    </SafeAreaView>
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