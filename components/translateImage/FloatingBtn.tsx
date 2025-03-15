import React from "react";
import { FloatingAction } from "react-native-floating-action";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { COLORS } from "@/constants/colors";
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

export default function FloatingBtn() {
  const pickImage = useExtractTextTranslationStore((state) => state.pickImage);
  const takePhoto = useExtractTextTranslationStore((state) => state.takePhoto);

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

  return (
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
  );
}
