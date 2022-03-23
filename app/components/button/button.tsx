import * as React from "react"
import { TouchableOpacity } from "react-native"
import { Text } from "../text/text"
import { viewPresets } from "./button.presets"
import { ButtonProps } from "./button.props"
import { presets } from "../text/text.presets"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = "button",
    textPreset = "button",
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    ...rest
  } = props

  const viewStyle = viewPresets[preset] || viewPresets.primary
  const viewStyles = [viewStyle, styleOverride]
  const textStyle = presets[preset] || presets.button
  const textStyles = [textStyle, textStyleOverride]

  const content = children || <Text tx={tx} text={text} style={textStyles} preset={textPreset} />

  return (
    <TouchableOpacity style={viewStyles} {...rest}>
      {content}
    </TouchableOpacity>
  )
}
