import { StackNavigationOptions } from "@react-navigation/stack"
import { styles } from "./styles"

export type { IAppParamList } from "./app-navigator/app-navigator.types"
export type { IRootNavigationProp, IRootRoutProp } from "./root-navigator"

export const defaultHeaderOptions: StackNavigationOptions = {
  headerStyle: styles.header,
  headerBackTitleVisible: true,
  headerTitleAlign: "center",
  headerTitleStyle: styles.headerTitle,
}
