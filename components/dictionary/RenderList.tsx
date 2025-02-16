import React from "react";
import { StyleSheet, View } from "react-native";

import Definition from "./Definition";
import Example from "./Example";
import { DictionaryResultsType } from "@/types";

// coming from DictionaryList Component
type RenderListProps = {
  item: DictionaryResultsType;
};

export default function RenderList({ item }: RenderListProps) {
  return (
    <View style={styles.flatListView}>
      <Definition definition={item.definition} />

      {item.example.trim() !== "" && <Example example={item.example} />}
    </View>
  );
}

const styles = StyleSheet.create({
  flatListView: {
    paddingHorizontal: 6,
  },
});
