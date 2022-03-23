import * as Font from "expo-font"

import { ChakraPetch_400Regular, ChakraPetch_600SemiBold } from "@expo-google-fonts/chakra-petch"

export const initFonts = async () => {
  await Font.loadAsync({
    GoodTimes_400Regular   : require("./good-times.otf"),
    ChakraPetch_400Regular: ChakraPetch_400Regular,
    ChakraPetch_600SemiBold: ChakraPetch_600SemiBold,
  })
}
