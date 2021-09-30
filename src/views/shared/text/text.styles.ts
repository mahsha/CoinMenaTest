import styled, { css } from "styled-components/native"
import { R } from "@coin-mena/res"
import { ITextProps } from "./text.props"

const primaryRegular = css`
  font-family: ${R.font.primaryRegular};
`

const primaryMedium = css`
  font-family: ${R.font.primaryMedium};
`

const primaryBold = css`
  font-family: ${R.font.primaryBold};
`

const secondaryRegular = css`
  font-family: ${R.font.secondaryRegular};
`

const secondaryMedium = css`
  font-family: ${R.font.secondaryMedium};
`

export const StyledText = styled.Text<ITextProps>`
  ${({ preset = "primaryMedium" }) => css`
    ${preset === "primaryRegular" && primaryRegular}
    ${preset === "primaryMedium" && primaryMedium}
    ${preset === "secondaryMedium" && secondaryMedium}
    ${preset === "secondaryRegular" && secondaryRegular}
    ${preset === "primaryBold" && primaryBold}
  `}
`
