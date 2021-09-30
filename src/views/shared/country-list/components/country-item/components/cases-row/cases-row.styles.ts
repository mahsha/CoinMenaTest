import styled from "styled-components/native"
import { Text } from "@coin-mena-shared"
import { R } from "@coin-mena/res"

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const TextCol = styled.View`
  align-items: center;
`

export const ConfirmText = styled(Text)`
  margin-top: ${R.spacing.small}px;
  color: ${R.color.palette.blue200};
`

export const RecoverText = styled(Text)`
  margin-top: ${R.spacing.small}px;
  color: ${R.color.palette.green};
`

export const DeathText = styled(Text)`
  margin-top: ${R.spacing.small}px;
  color: ${R.color.palette.red300};
`
