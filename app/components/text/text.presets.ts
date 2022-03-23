import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  header: {
    ...BASE,
    fontFamily: typography.header,
    fontSize: 36,
    fontStyle: "italic",
    textAlign: "center",
    color: color.palette.darkRed,
    textShadowColor: "rgba(196, 196, 196, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
  } as TextStyle,

  paragraph: {
    ...BASE,
    fontFamily: typography.paragraph,
    fontSize: 36,
  } as TextStyle,

  catchphrase: {
    ...BASE,
    fontFamily: typography.catchphrase,
    fontSize: 14,
    alignSelf: "center",
    marginVertical: 10,
  } as TextStyle,

  button: {
    ...BASE,
    fontFamily: typography.button,
    fontSize: 20,
  } as TextStyle,

  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: "bold" } as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: color.dim } as TextStyle,

  /**
   * A smaller piece of secondary information.
   */
  secondary: { ...BASE, fontSize: 9, color: color.dim } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
