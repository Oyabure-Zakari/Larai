import React from "react";
import { FlatList} from "react-native";
import RenderList from "./RenderList";
import { useDictionaryStore } from "@/store/useDictionaryStore";

export default function DictionaryList() {
  const results = useDictionaryStore((state) => state.results);
  return (
    <FlatList
      data={results}
      showsVerticalScrollIndicator={false}
      // Using index since there's no unique ID
      keyExtractor={(_, index) => index.toString()} 
      renderItem={({ item }) => (
        <RenderList item={ item }/>
      )}
    />
  );
}
