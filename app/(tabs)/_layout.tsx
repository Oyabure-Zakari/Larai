import React from "react";
import { Tabs } from "expo-router";
import { COLORS } from "@/constants/colors";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={
      {
        headerShown:false,
        tabBarActiveTintColor: COLORS.primaryBlack,
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: COLORS.backgroundGrey,
        }
      }
      }>
      <Tabs.Screen 
        name="index" 
        options={{ tabBarLabel: "Dictionary" }} 
      />

      <Tabs.Screen 
        name="Translate" 
        options={{ tabBarLabel: "Translate" }} 
      />

      <Tabs.Screen
        name="Translation"
        options={{ tabBarLabel: "Translation" }}
      />
    </Tabs>
  );
}
