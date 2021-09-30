export interface ISummery {
  Global: IGlobal
  Countries: ICountry[]
  Date: Date
  ID: string
}
export interface ICountry {
  Country: string
  CountryCode: string
  Date: Date
  ID: string
  NewConfirmed: number
  NewDeaths: number
  NewRecovered: number
  Premium: {}
  Slug: string
  TotalConfirmed: number
  TotalDeaths: number
  TotalRecovered: number
}

interface IGlobal {
  Date: Date
  NewConfirmed: number
  NewDeaths: number
  NewRecovered: number
  TotalConfirmed: number
  TotalDeaths: number
  TotalRecovered: number
}
