import React from "react";
import LoginUI from "@/components/login/LoginUI";
import { StatusBar } from "expo-status-bar";

export default function GoogleLogin() {
  return (
    <>
      <StatusBar/>
      <LoginUI/>
    </>
  );
}


