import React from "react";
import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import { Button } from "react-native-elements";

import { COLORS } from "@/constants/colors";

export const nextButton = ({ ...props }) => {
  return (
    <View style={styles.button}>
      <Button
        title="Next"
        buttonStyle={{ backgroundColor: COLORS.primaryBlack, borderRadius: 10 }}
        titleStyle={{ fontFamily: "consolas", padding: 8 }}
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
        title="Get Started"
        buttonStyle={{ backgroundColor: COLORS.primaryBlack, borderRadius: 10 }}
        titleStyle={{ fontFamily: "consolas", padding: 8 }}
        onPress={() => router.push("/auth/GoogleLogin")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingRight: 16,
  },
});
