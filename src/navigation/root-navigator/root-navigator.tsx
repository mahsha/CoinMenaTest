import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { AppRoute } from "@coin-mena/navigation/routes"
import { HomePage } from "@coin-mena/views/home-page"
import { CountryPage } from "@coin-mena/views/country-page"
import { IRootParamList } from "./root-navigator.types"

const RootStack = createStackNavigator<IRootParamList>()

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={AppRoute.HomePage}
      screenOptions={{ headerShown: true, gestureEnabled: false }}>
      <RootStack.Screen name={AppRoute.HomePage} component={HomePage} />
      <RootStack.Screen name={AppRoute.CountryPage} component={CountryPage} />
    </RootStack.Navigator>
  )
}

export default RootNavigator
