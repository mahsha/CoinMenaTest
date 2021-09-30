import React, { useCallback } from "react"
import { SafeAreaView, CountryList } from "@coin-mena-shared"
import { AppRoute } from "@coin-mena/navigation/routes"
import { IHomePageProps } from "./home-page.props"
import Chart from "./components/chart/chart"
import { ChartContainer, Container } from "./home-page.styles"

const HomePage = ({ navigation }: IHomePageProps) => {
  const navigateToList = useCallback(() => {
    navigation.navigate(AppRoute.CountryPage)
  }, [navigation])

  return (
    <SafeAreaView>
      <Container>
        <ChartContainer>
          <Chart />
        </ChartContainer>
        <CountryList slice={5} navigateToList={navigateToList} />
      </Container>
    </SafeAreaView>
  )
}

export default HomePage
