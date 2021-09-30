import React, { useMemo } from "react"
//@ts-ignore TODO:
import Pie from "react-native-pie"
import { useCovidQuery } from "@coin-mena/hooks"
import { Container } from "./chart.styles"

const Chart = () => {
  const { data } = useCovidQuery({})
  const { TotalConfirmed = 1, TotalDeaths = 1, TotalRecovered = 1 } = data?.Global ?? {}
  const sliceColor = useMemo(() => {
    const sum = TotalConfirmed + TotalDeaths + TotalRecovered
    return [
      {
        percentage: (TotalConfirmed / sum) * 100,
        color: "#C70039",
      },
      {
        percentage: (TotalDeaths / sum) * 100,
        color: "#44CD40",
      },
      {
        percentage: (TotalRecovered / sum) * 100,
        color: "#404FCD",
      },
    ]
  }, [TotalConfirmed, TotalDeaths, TotalRecovered])

  return (
    <Container>
      <Pie radius={80} sections={sliceColor} strokeCap={"butt"} />
    </Container>
  )
}

export default Chart
