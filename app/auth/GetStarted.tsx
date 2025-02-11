import React from "react";
import GetStartedUI from "@/components/login/GetStartedUI";
import {StatusBar} from 'react-native'

import { COLORS } from "@/constants/colors";

export default function GetStarted() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.backgroundGrey}/>
      <GetStartedUI/>
    </>
  );
}

