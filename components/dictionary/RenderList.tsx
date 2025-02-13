import React from "react";
import { StyleSheet, View } from "react-native";

import Definition from "./Definition";
import Example from "./Example";

type ResultsType = {
  definition: string;
  example: string;
};

type RenderListProps = {
  item: ResultsType;
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
