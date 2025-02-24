import React from "react";
import { Alert, View } from "react-native";
import { useTranslationStore } from "@/store/useTranslationStore";

export default function APIError() {
  const error = useTranslationStore((state) => state.error);

  return <View>{error && Alert.alert("Error", error, [{ text: "OK" }])}</View>;
}
