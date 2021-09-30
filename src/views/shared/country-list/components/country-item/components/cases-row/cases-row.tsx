import React from "react"
import { Text } from "@coin-mena-shared"
import { ICasesRowProps } from "./cases-row.props"
import { ConfirmText, Container, DeathText, RecoverText, TextCol } from "./cases-row.styles"

const CasesRow = ({ type, confirmed, deaths, recovered }: ICasesRowProps) => {
  return (
    <Container>
      <TextCol>
        <Text>{type + " Confirmed"}</Text>
        <ConfirmText>{confirmed}</ConfirmText>
      </TextCol>
      <TextCol>
        <Text>{type + "Deaths"}</Text>
        <DeathText>{deaths}</DeathText>
      </TextCol>
      <TextCol>
        <Text>{type + "Recovered"}</Text>
        <RecoverText>{recovered}</RecoverText>
      </TextCol>
    </Container>
  )
}

export default CasesRow
