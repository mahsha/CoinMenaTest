import React from "react"
import { SafeAreaView, CountryList } from "@coin-mena-shared"
import { Container } from "./country-page.styles"

const CountryPage = () => {
  return (
    <SafeAreaView bottom>
      <Container>
        <CountryList type={"details"} />
      </Container>
    </SafeAreaView>
  )
}

export default CountryPage
