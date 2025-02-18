import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { FONT_SIZE } from "@/constants/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import { TextInput } from "react-native";
import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import axios from "axios";

import { Picker } from "@react-native-picker/picker";
import { transform } from "@babel/core";

export default function Translation() {
  const [word, setWord] = useState("");
  const [query, setQuery] = useState("");
  const [translation, setTranslation] = useState("");
  const [translateFrom, setTranslateFrom] = useState("");
  const [translateTo, setTranslateTo] = useState("");

  const sendBtn = async () => {
    const options = {
      method: "POST",
      url: "https://free-google-translator.p.rapidapi.com/external-api/free-google-translator",
      params: {
        from: translateFrom,
        to: translateTo,
        query: word,
      },
      headers: {
        "x-rapidapi-key": "bdb64cf2eemsh8a6592eeb408bcfp122f74jsn0e7790dcb96a",
        "x-rapidapi-host": "free-google-translator.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        translate: "rapidapi",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setQuery(response.data.query);
      setTranslation(response.data.translation);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Translation</Text>

      {/* translate from */}
      <View style={styles.translateFromView}>
      <Text style={styles.text2}>From: </Text>
      <Picker
        selectedValue={translateFrom}
        onValueChange={(value) => setTranslateFrom(value)}
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


      {/* translate to */}
      <View style={styles.translateToView}>
      <Text style={styles.text2}>To: </Text>
            <Picker
        selectedValue={translateTo}
        onValueChange={(value) => setTranslateTo(value)}
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
      

      <Text>{query}</Text>

      <Text>{translation}</Text>

      <View style={styles.textAndButtonView}>
        <TextInput
          style={styles.textInput}
          placeholder="dictionary"
          placeholderTextColor="grey"
          value={word}
          onChangeText={setWord}
        />

        <TouchableOpacity style={styles.sendBtn} onPress={sendBtn}>
          <Ionicons name="send" size={20} color={COLORS.primaryBlack} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  translateFromView: { 
    gap: 4,
    marginTop: 40,
    height: 40,
    width: '95%',
    alignItems: "center",
    flexDirection: "row",
  },

  translateToView: { 
    gap: 25,
    height: 40,
    width: '95%',
    marginTop: 40,
    alignItems: "center",
    flexDirection: "row",
  },

  picker: { 
    height: 60,
    width: "80%",
    marginLeft: 10,
    backgroundColor: COLORS.secondaryGrey,
  },

  text: {
    fontSize: FONT_SIZE.mainText_Seoge.large,
    fontFamily: "segoeui_bold",
  },

  text2: {
    fontSize: 15,
    fontFamily: "segoeui_blackItalic",
  },

  textAndButtonView: {
    gap: 10,
    // height: 45,
    width: "100%",
    marginTop: "auto",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    //backgroundColor: "red",
  },

  textInput: {
    width: "85%",
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.secondaryGrey,
    marginLeft: 4,
    paddingLeft: 8,
  },

  sendBtn: {
    width: "10%",
    height: 35,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    marginRight: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
