import React, { useEffect } from "react";

import { StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FloatingAction } from "react-native-floating-action";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { COLORS } from "@/constants/colors";


import { Picker } from "@react-native-picker/picker";

import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import { Alert } from "react-native";
import { ScrollView } from "react-native";
import { View } from "react-native";

import { useExtractTextTranslationStore } from "@/store/useExtractTextTranslationStore";

const actions = [
  {
    text: "Camera",
    icon: (
      <FontAwesome name="camera" size={20} color={COLORS.backgroundColor} />
    ),
    name: "bt_Camera",
    position: 1,
    color: COLORS.secondaryGrey,
  },
  {
    text: "Gallery",
    icon: (
      <Entypo name="folder-images" size={20} color={COLORS.backgroundColor} />
    ),
    name: "bt_Gallery",
    position: 2,
    color: COLORS.secondaryGrey,
  },
];



export default function Translate() {
const image = useExtractTextTranslationStore ((state) => state.image);
const pickImage = useExtractTextTranslationStore ((state) => state.pickImage);
const translatedText = useExtractTextTranslationStore ((state) => state.translatedText);
const takePhoto = useExtractTextTranslationStore ((state) => state.takePhoto);
const translateTo = useExtractTextTranslationStore ((state) => state.translateTo);
const setTranslateTo = useExtractTextTranslationStore ((state) => state.setTranslateTo);
const error = useExtractTextTranslationStore ((state) => state.error);
const isLoading = useExtractTextTranslationStore ((state) => state.isLoading);
const extractTextAndTranslate = useExtractTextTranslationStore ((state) => state.extractTextAndTranslate);

  const handlePress = (name?: string) => {
    switch (name) {
      case "bt_Camera":
        takePhoto();
        break;
      case "bt_Gallery":
        pickImage();
        break;
      default:
        console.log(`Unknown button: ${name}`);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("Error", "Oops something went wrong try again", [{ text: "OK" }]);
    }
  }, [error]);

  return (
    <SafeAreaView style={styles.container}> 
      {image && (
        <View style={styles.translateToView}>
          <Text style={styles.toText}>To: </Text>
          <Picker
            selectedValue={translateTo}
            onValueChange={setTranslateTo}
            style={styles.picker}
          >
            <Picker.Item label="Select a language" value="" enabled={false} />
            <Picker.Item label="English 🇬🇧🇺🇸🇦🇺" value="en" />
            <Picker.Item label="Chinese (Mandarin) 🇨🇳" value="zh" />
            <Picker.Item label="Spanish 🇪🇸🇲🇽🇦🇷" value="es" />
            <Picker.Item label="Hindi 🇮🇳" value="hi" />
            <Picker.Item label="Arabic 🇸🇦🇪🇬🇦🇪" value="ar" />
            <Picker.Item label="French 🇫🇷🇨🇦🇧🇪" value="fr" />
            <Picker.Item label="Bengali 🇧🇩🇮🇳" value="bn" />
            <Picker.Item label="Portuguese 🇵🇹🇧🇷" value="pt" />
            <Picker.Item label="Russian 🇷🇺" value="ru" />
            <Picker.Item label="Urdu 🇵🇰🇮🇳" value="ur" />
            <Picker.Item label="German 🇩🇪🇦🇹🇨🇭" value="de" />
            <Picker.Item label="Japanese 🇯🇵" value="ja" />
            <Picker.Item label="Swahili 🇰🇪🇹🇿🇺🇬" value="sw" />
            <Picker.Item label="Italian 🇮🇹" value="it" />
            <Picker.Item label="Turkish 🇹🇷" value="tr" />
            <Picker.Item label="Korean 🇰🇷" value="ko" />
            <Picker.Item label="Tamil 🇮🇳🇱🇰🇸🇬" value="ta" />
            <Picker.Item label="Persian (Farsi) 🇮🇷" value="fa" />
            <Picker.Item label="Vietnamese 🇻🇳" value="vi" />
            <Picker.Item label="Polish 🇵🇱" value="pl" />
            <Picker.Item label="Dutch 🇳🇱🇧🇪" value="nl" />
            <Picker.Item label="Filipino (Tagalog) 🇵🇭" value="tl" />
            <Picker.Item label="Thai 🇹🇭" value="th" />
            <Picker.Item label="Greek 🇬🇷" value="el" />
            <Picker.Item label="Hebrew 🇮🇱" value="he" />
          </Picker>
        </View>
      )}

      <View style={styles.topView}>
        {image && <Image source={{ uri: image }} style={styles.image} />}

        {image && translateTo && (
          <TouchableOpacity
            disabled={isLoading}
            onPress={extractTextAndTranslate}
            style={styles.translateTextBtn}
          >
            {isLoading ? (
              <ActivityIndicator size={"small"} color={COLORS.green} />
            ) : (
              <Text style={styles.textBtn}>Translate text</Text>
            )}
          </TouchableOpacity>
        )}
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.bottomView}>
          {translatedText && <Text style={styles.apiText}>{translatedText}</Text>}
        </View>
      </ScrollView>

      <FloatingAction
        floatingIcon={
          <MaterialCommunityIcons
            name="image-auto-adjust"
            size={35}
            color={COLORS.backgroundColor}
          />
        }
        color={COLORS.green}
        actions={actions}
        onPressItem={handlePress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  translateToView: {
    gap: 25,
    height: 40,
    width: "95%",
    marginTop: 50,
    alignItems: "center",
    flexDirection: "row",
  },

  toText: {
    fontSize: 15,
    fontFamily: "segoeui_blackItalic",
  },

  picker: {
    height: 60,
    width: "80%",
    marginLeft: 10,
    backgroundColor: COLORS.secondaryGrey,
  },

  image: {
    width: "95%",
    height: 200,
    marginTop: 20,
    borderRadius: 10
  },

  translateTextBtn: {
    height: 40,
    width: "40%",
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.backgroundColor,
  },

  textBtn: {
    color: COLORS.green,
    fontFamily: "segoeui_bold",
  },

  scrollView: {
    width: "95%",
  },

  topView: {
    width: "100%",
    marginTop: 20,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomView: {
    paddingVertical: 20,
  },

  apiText: {
    fontSize: 16,
    fontFamily: "segoeui_bold",
    color: COLORS.backgroundColor,
  },
});
