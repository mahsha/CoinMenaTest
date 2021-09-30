import fonts from "@coin-mena/assets/fonts"

const font = {
  primaryRegular: fonts.rubikRegular,
  primaryMedium: fonts.rubikMedium,
  primaryBold: fonts.rubikBold,
  secondaryRegular: fonts.robotoRegular,
  secondaryMedium: fonts.robotoMedium,
} as const

export default font
export { default as fontSize } from "./font.size"
export { default as fontHeight } from "./font-height"
