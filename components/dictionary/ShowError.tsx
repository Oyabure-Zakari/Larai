import React from "react";
import { Alert, View } from "react-native";
import { useDictionaryStore } from "@/store/useDictionaryStore";

export default function ShowError() {
  const error = useDictionaryStore((state) => state.error);

  return <View>{error && Alert.alert("Error", error, [{ text: "OK" }])}</View>;
}
