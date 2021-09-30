import React from "react"
import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { RootNavigator } from "@coin-mena/navigation/root-navigator"
import { R } from "@coin-mena/res"

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: R.color.palette.white,
  },
}

const AppNavigator = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
