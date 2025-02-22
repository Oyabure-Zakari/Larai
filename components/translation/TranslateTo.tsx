import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { Picker } from "@react-native-picker/picker";
import { useTranslationStore } from "@/store/useTranslationStore";

export default function TranslateTo() {
  const translateTo = useTranslationStore((state) => state.translateTo);
  const setTranslateTo = useTranslationStore((state) => state.setTranslateTo);

  return (
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
  );
}

const styles = StyleSheet.create({
  translateToView: {
    gap: 25,
    height: 40,
    width: "95%",
    marginTop: 40,
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
});
