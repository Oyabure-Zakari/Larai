import React from "react";
import { FlatList} from "react-native";
import RenderList from "./RenderList";

type ResultsType = {
  definition: string;
  example: string;
};

type DictionaryListProps = {
  results: ResultsType[];
};

export default function DictionaryList({ results }:DictionaryListProps) {
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
