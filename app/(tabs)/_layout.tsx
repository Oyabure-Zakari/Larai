import React from "react";
import { Tabs } from "expo-router";
import { COLORS } from "@/constants/colors";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={
      {
        headerShown:false,
        tabBarActiveTintColor: COLORS.primaryGrey,
        tabBarInactiveTintColor: COLORS.SecondaryBlack,
        tabBarShowLabel:true,
        tabBarStyle: {
          backgroundColor: COLORS.primaryBlack,
        }
      }
      }>
      <Tabs.Screen 
        name="index" 
        options={{ 
          tabBarLabel:"Dictionary",
          tabBarIcon:({color, size}) => (
            <MaterialIcons
              name="library-books"
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* <Tabs.Screen 
        name="Translate" 
        options={{ 
          tabBarLabel:"Image to Text",
          tabBarIcon:({color, size}) => (
            <Entypo
              name="images"
              color={color}
              size={size}
            />
          ),
        }} 
      /> */}

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
