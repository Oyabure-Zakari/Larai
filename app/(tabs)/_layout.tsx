import React from "react";
import { Tabs } from "expo-router";
import { COLORS } from "@/constants/colors";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";

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
          tabBarIcon:({color, size}) => (
            <MaterialIcons
              name="library-books"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen 
        name="Translate" 
        options={{ 
          tabBarIcon:({color, size}) => (
            <Entypo
              name="images"
              color={color}
              size={size}
            />
          ),
        }} 
      />

      <Tabs.Screen
        name="Translation"
        options={{ 
          tabBarIcon:({color, size}) => (
            <FontAwesome
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
