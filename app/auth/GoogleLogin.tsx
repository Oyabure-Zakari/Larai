import React from "react";
import LoginUI from "@/components/login/LoginUI";
import {StatusBar} from 'react-native'

import { COLORS } from "@/constants/colors";

export default function GoogleLogin() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.backgroundGrey}/>
      <LoginUI/>
    </>
  );
}


