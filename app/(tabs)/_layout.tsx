import React from "react";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ tabBarLabel: "Dictionary" }} />

      <Tabs.Screen 
        name="Translate" 
        options={{ tabBarLabel: "Translate" }} />

      <Tabs.Screen
        name="Translation"
        options={{ tabBarLabel: "Translation" }}
      />
    </Tabs>
  );
}
