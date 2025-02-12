import React from "react";
import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import { Button } from "react-native-elements";

import { COLORS } from "@/constants/colors";
import { FONT_SIZE } from "@/constants/fonts";

export const skipButton = () => {
  const router = useRouter();
  return (
    <View style={styles.button}>
      <Button
        title="Skip"
        buttonStyle={{ backgroundColor: COLORS.primaryGrey, borderRadius: 10 }}
        titleStyle={{color:COLORS.backgroundColor, fontSize: FONT_SIZE.consolas.small, fontFamily: "consolas", padding: 8 }}
        onPress={() => router.push("/auth/GetStarted")}
      />
    </View>
  );
};

export const nextButton = ({ ...props }) => {
  return (
    <View style={styles.button}>
      <Button
        title="Next"
        buttonStyle={{ backgroundColor: COLORS.green, borderRadius: 10 }}
        titleStyle={{color:COLORS.backgroundColor, fontFamily: "consolas", padding: 8 }}
        {...props}
      />
    </View>
  );
};

export const doneButton = () => {
  const router = useRouter();
  return (
    <View style={styles.button}>
      <Button
        title="Next"
        buttonStyle={{ backgroundColor: COLORS.green, borderRadius: 10 }}
        titleStyle={{color:COLORS.backgroundColor, fontFamily: "consolas", padding: 8 }}
        onPress={() => router.push("/auth/GetStarted")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingRight: 16,
  },
});
