import React, { useCallback, useState } from "react"
import { Button, FlatList } from "react-native"
import { useCovidQuery } from "@coin-mena/hooks"
import { ICountry } from "@coin-mena/network"
import { CovidQuerySort } from "@coin-mena/hooks/useCovidQuery"
import { CountryItem } from "./components"
import { ICountryListProps } from "./country-list.props"
import {
  ActionButton,
  ButtonContainer,
  Container,
  SearchBar,
  Sepatator,
} from "./country-list.styles"

const CountryList = ({ type, slice, navigateToList }: ICountryListProps) => {
  const [searchText, setSearchText] = useState(undefined)
  const [sort, setSort] = useState<CovidQuerySort>("Country")
  const { data, isLoading } = useCovidQuery({ slice, searchText, sort })

  const renderItem = useCallback(
    ({ item }: { item: ICountry }) => {
      return <CountryItem item={item} type={type} />
    },
    [type],
  )
  const renderSepatator = useCallback(() => {
    return <Sepatator />
  }, [])

  const goTolist = useCallback(() => {
    navigateToList && navigateToList()
  }, [navigateToList])

  const renderFooter = useCallback(() => {
    return navigateToList ? <Button title={"see more.."} onPress={goTolist} /> : null
  }, [goTolist, navigateToList])

  const onChange = useCallback((text) => {
    setSearchText(text)
  }, [])

  const clickOnSort = useCallback(
    (element) => () => {
      setSort(element)
    },
    [],
  )

  const keyExtractor = useCallback((item) => {
    return item.id
  }, [])

  const renderButton = useCallback(() => {
    const sortArray = [
      "TotalConfirmed",
      "TotalDeaths",
      "TotalRecovered",
      "NewConfirmed",
      "NewDeaths",
      "NewRecovered",
      "Country",
    ]
    return (
      <ButtonContainer>
        {sortArray.map((element) => {
          return <ActionButton key={element} title={element} onPress={clickOnSort(element)} />
        })}
      </ButtonContainer>
    )
  }, [clickOnSort])

  return (
    <Container>
      {type && (
        <>
          <SearchBar onChangeText={onChange} />
          {renderButton()}
        </>
      )}

      {!isLoading && (
        <FlatList
          data={data?.Countries}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderSepatator}
          renderItem={renderItem}
          ListFooterComponent={renderFooter}
        />
      )}
    </Container>
  )
}

export default CountryList
