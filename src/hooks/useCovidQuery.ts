import { useQuery } from "react-query"
import React from "react"
import { CovidDataService, ISummery } from "@coin-mena/network"
import { QueryType } from "./queries-types"

export type CovidQuerySort =
  | "TotalConfirmed"
  | "TotalDeaths"
  | "TotalRecovered"
  | "NewConfirmed"
  | "NewDeaths"
  | "NewRecovered"
  | "Country"
export interface ICovidQuery {
  searchText?: string
  sort?: CovidQuerySort
  slice?: number
}

const getSummary = async (): Promise<ISummery> => {
  try {
    const response = await CovidDataService.getSummary()
    const data: ISummery = response.data
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

const useCovidQuery = ({ searchText, sort, slice }: ICovidQuery) => {
  return useQuery<ISummery, Error>([QueryType.Coivd], () => getSummary(), {
    select: React.useCallback(
      (data: ISummery) => {
        let countries = data.Countries

        if (searchText) {
          countries = countries.filter((country) => {
            return country.Country.includes(searchText)
          })
        }
        // countries = countries.slice(0, 5)

        if (sort) {
          countries = countries.sort((a, b) => {
            if (a[sort] < b[sort]) {
              return sort === "Country" ? -1 : 1
            }
            if (a[sort] > b[sort]) {
              return sort === "Country" ? 1 : -1
            }
            return 0
          })
        }

        if (slice && countries.length > slice) {
          countries = countries.slice(0, slice)
        }

        return { ...data, Countries: [...countries] }
      },
      [searchText, slice, sort],
    ),
  })
}

export default useCovidQuery
