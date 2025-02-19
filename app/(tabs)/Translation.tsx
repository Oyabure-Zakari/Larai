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
import { ScrollView } from "react-native";
import { TRANSLATION_API_URL, TRANSLATION_RAPID_API_HOST, TRANSLATION_RAPID_API_KEY } from "@env";

export default function Translation() {
  const [word, setWord] = useState("");

  // result from api
  const [query, setQuery] = useState("");
  const [translation, setTranslation] = useState("");

  // select languages state
  const [translateFrom, setTranslateFrom] = useState("");
  const [translateTo, setTranslateTo] = useState("");

  const sendBtn = async () => {
    const options = {
      method: "POST",
      url: TRANSLATION_API_URL,
      params: {
        from: translateFrom,
        to: translateTo,
        query: word,
      },
      headers: {
        "x-rapidapi-key": TRANSLATION_RAPID_API_KEY,
        "x-rapidapi-host": TRANSLATION_RAPID_API_HOST,
        "Content-Type": "application/json",
      },
      data: {
        translate: "rapidapi",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setWord("")
      setQuery(response.data.query);
      setTranslation(response.data.translation);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Translation</Text>
      <ScrollView>

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

        {query.length > 0 && (
          <View style={styles.queryView}>
            <Text style={styles.queryText}>{query}</Text>
          </View>
        )}

        {translation.length > 0 && (
          <View style={styles.translationView}>
            <Text style={styles.translationText}>{translation}</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.textAndButtonView}>
          <TextInput
            style={styles.textInput}
            multiline={true}
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
    width: "95%",
    alignItems: "center",
    flexDirection: "row",
  },

  translateToView: {
    gap: 25,
    height: 40,
    width: "95%",
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
    fontFamily: "segoeui_bold",
    fontSize: FONT_SIZE.mainText_Seoge.large,
  },

  queryView: {
    padding: 20,
    width:"90%",
    marginTop: 20,
    marginLeft: 16,
    alignSelf: "flex-end",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomRightRadius: 10,
  },

  queryText: {
    marginTop: 60,
    textAlign: "right",
    fontFamily: "segoeui_bold",
    color: COLORS.backgroundColor,
    fontSize: FONT_SIZE.consolas.small,
  },

  translationView: {
    padding: 20,
    width:"90%",
    marginTop: 20,
    marginLeft: 16,
    alignSelf: "flex-start",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: COLORS.backgroundColor,
  },

  translationText: {
    textAlign: "left",
    fontFamily: "segoeui_blackItalic",
    color: COLORS.green,
    fontSize: FONT_SIZE.mainText_Seoge.small,
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
