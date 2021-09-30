import React from "react"
import { ExtractProps } from "@coin-mena/utils"
import { StyledText } from "./text.styles"

const Text = ({ lines, showLinks = true, ...restProps }: ExtractProps<typeof StyledText>) => {
  const numberOfLines = lines === "single" ? 1 : 0
  if (showLinks) {
    return <StyledText numberOfLines={numberOfLines} {...restProps} />
  }
  return <StyledText numberOfLines={numberOfLines} {...restProps} />
}
export default Text
