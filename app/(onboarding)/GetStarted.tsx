import React from "react";
import {StatusBar} from 'react-native'

import { COLORS } from "@/constants/colors";
import GetStartedUI from "@/components/getStartedUI/GetStartedUI";

export default function GetStarted() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primaryGrey}/>
      <GetStartedUI/>
    </>
  );
}

