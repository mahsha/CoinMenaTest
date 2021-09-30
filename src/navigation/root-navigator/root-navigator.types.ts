import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { AppRoute } from "@coin-mena/navigation/routes"

export type IRootParamList = {
  [AppRoute.HomePage]: undefined
  [AppRoute.CountryPage]: undefined
}

type IRootRoute = keyof IRootParamList

export type IRootNavigationProp<R extends IRootRoute> = StackNavigationProp<IRootParamList, R>
export type IRootRoutProp<R extends IRootRoute> = RouteProp<IRootParamList, R>
