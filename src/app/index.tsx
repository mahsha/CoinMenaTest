import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { QueryClient, QueryClientProvider } from "react-query"
import { Root, ALERT_TYPE, Toast } from "react-native-alert-notification"
import { AppNavigator } from "@coin-mena/navigation"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: "tracked",
      // Because API changed every 24 hrs
      staleTime: 1000 * 60 * 24,
      onError: () => {
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: "ERROR",
          textBody: "error",
        })
      },
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Root>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </Root>
    </QueryClientProvider>
  )
}

export default App
