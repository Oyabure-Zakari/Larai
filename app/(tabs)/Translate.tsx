import React from "react";
import { useState } from "react";

import { StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FloatingAction } from "react-native-floating-action";

import * as ImagePicker from "expo-image-picker";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fonts";

import { CLOUD_NAME, UPLOAD_PRESET } from "@env";

import { Cloudinary } from "@cloudinary/url-gen";
import { upload } from "cloudinary-react-native";

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
  const [image, setImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(image);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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

  const uploadToCloudinary = async () => {
    const cld = new Cloudinary({
      cloud: {
        cloudName: CLOUD_NAME,
      },
      url: {
        secure: true,
      },
    });

    const options = {
      upload_preset: UPLOAD_PRESET,
      unsigned: true,
    };

    await upload(cld, {
      file: image,
      options: options,
      callback: (error: any, response: any) => {
        //.. handle response
        if (response) {
          console.log(response);
        } else {
          console.log(error);
        }
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={uploadToCloudinary} style={styles.text}>
        Translate
      </Text>

      {image && <Image source={{ uri: image }} style={styles.image} />}

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

  text: {
    fontSize: FONT_SIZE.mainText_Seoge.large,
    fontFamily: "segoeui_bold",
  },

  image: {
    width: "95%",
    height: 200,
    marginTop: 20,
  },
});
