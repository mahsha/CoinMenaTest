import React from "react"
import { Text } from "@coin-mena-shared"
import { CasesRow } from "./components"
import { ICountryItemProps } from "./country-item.props"
import { NameContainer, Separator, CountryContainer } from "./country-item.styles"

const CountryItem = ({ item, type }: ICountryItemProps) => {
  return (
    <CountryContainer>
      <NameContainer>
        <Text>{item.Country}</Text>
      </NameContainer>
      <CasesRow
        type="New"
        confirmed={item.NewConfirmed}
        deaths={item.NewDeaths}
        recovered={item.NewRecovered}
      />
      {type && (
        <>
          <Separator />
          <CasesRow
            type="Total"
            confirmed={item.TotalConfirmed}
            deaths={item.TotalDeaths}
            recovered={item.TotalRecovered}
          />
        </>
      )}
    </CountryContainer>
  )
}

export default CountryItem
