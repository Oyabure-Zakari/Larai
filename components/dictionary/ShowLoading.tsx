import React from "react";
import { ActivityIndicator, View } from "react-native";

import { COLORS } from "@/constants/colors";
import { useDictionaryStore } from "@/store/useDictionaryStore";

export default function ShowLoading() {
  const isLoading = useDictionaryStore((state) => state.isLoading);

  return (
    <>
      <View style={{ flex: 1 }}></View>
      <View>
        {isLoading && <ActivityIndicator size={"large"} color={COLORS.green} />}
      </View>
    </>
  );
}
