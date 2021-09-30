import styled from "styled-components/native"
import { R } from "@coin-mena/res"

export const CountryContainer = styled.View`
  background-color: ${R.color.palette.white};
  padding: ${R.spacing.mediumSmall}px;
  shadow-color: ${R.color.palette.grey300};
  shadow-offset: ${R.spacing.none}px ${R.spacing.veryTiny}px;
  shadow-radius: ${R.spacing.veryTiny}px;
  shadow-opacity: 1;
  border-radius: ${R.spacing.tiny}px;
  elevation: 4;
  border-color: ${R.color.palette.grey800};
`
export const NameContainer = styled.View`
  align-items: center;
  margin-bottom: ${R.spacing.smaller}px;
`

export const Separator = styled.View`
  height: ${R.spacing.medium}px;
`
