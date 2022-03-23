import React from "react"
import { View, ViewStyle, ImageStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Icon } from "../icon/icon"
import { spacing } from "../../theme"
import { AutoImage } from "../../components"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "flex-start",
}
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

const logo = require("../../../assets/images/logo.png")

const LOGO: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 40,
  height: 40,
}

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    style,
  } = props
  return (
    <View style={[ROOT, style]}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon icon={leftIcon} />
        </Button>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <AutoImage source={logo} style={LOGO}/>
      </View>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon icon={rightIcon} />
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
