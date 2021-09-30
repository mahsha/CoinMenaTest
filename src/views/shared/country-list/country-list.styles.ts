import styled from "styled-components/native"
import { R } from "@coin-mena/res"

export const Sepatator = styled.View`
  height: ${R.spacing.tiny}px;
`

export const SearchBar = styled.TextInput`
  height: ${R.spacing.massive}px;
  margin: ${R.spacing.small}px;
  background-color: ${R.color.palette.grey10};
  border-radius: ${R.spacing.tiny}px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const Container = styled.View`
  flex: 1;
`

export const ActionButton = styled.Button`
  margin: ${R.spacing.tiny}px;
`
