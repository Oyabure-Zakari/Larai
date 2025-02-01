import React from "react";
import { Tabs } from "expo-router";
import { COLORS } from "@/constants/colors";
import { MaterialCommunityIcons, AntDesign, Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={
      {
        headerShown:false,
        tabBarActiveTintColor: COLORS.backgroundGrey,
        tabBarInactiveTintColor: COLORS.SecondaryBlack,
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: COLORS.primaryBlack,
        }
      }
      }>
      <Tabs.Screen 
        name="index" 
        options={{ 
          tabBarLabel: "Dictionary",
          tabBarIcon:({color, size}) => (
            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen 
        name="Translate" 
        options={{ 
          tabBarLabel: "Translate",
          tabBarIcon:({color, size}) => (
            <AntDesign
              name="camerao"
              color={color}
              size={size}
            />
          ),
        }} 
      />

      <Tabs.Screen
        name="Translation"
        options={{ 
          tabBarLabel: "Translation",
          tabBarIcon:({color, size}) => (
            <Ionicons
              name="language"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
