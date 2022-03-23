import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native"
import { ButtonPresetNames } from "./button.presets"
import { TxKeyPath } from "../../i18n"
import { TextPresets } from "../text/text.presets"

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * One of the different types of button presets.
   */
  preset?: ButtonPresetNames

  /**
   * One of the different types of text style presets.
   */
  textPreset?: TextPresets,

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode
}
