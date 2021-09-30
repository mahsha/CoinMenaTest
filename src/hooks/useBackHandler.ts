import { useFocusEffect } from "@react-navigation/core"
import React from "react"
import { BackHandler } from "react-native"

function useBackHandler(handler: () => boolean) {
  useFocusEffect(
    React.useCallback(() => {
      const listener = BackHandler.addEventListener("hardwareBackPress", handler)
      return () => listener.remove()
    }, [handler]),
  )
}

export default useBackHandler
