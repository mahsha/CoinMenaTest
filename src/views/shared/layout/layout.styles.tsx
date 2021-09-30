import styled from "styled-components/native"
import { StyleSheet } from "react-native"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"
import { R } from "@coin-mena/res"

export const StyledRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const StyledColumn = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-self: stretch;
`

export const StyledScrollView = styled.ScrollView`
  flex: 1;
  align-self: stretch;
`

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: auto;
`

export const Divider = styled.View`
  border-width: 0.5px;
  border-color: ${R.color.palette.transparent};
  background-color: ${R.color.palette.transparent};
  align-self: stretch;
`

export const Spacer = styled.View`
  width: ${R.spacing.large}px;
  height: ${R.spacing.large}px;
  align-self: stretch;
`

export const SpaceConsumer = styled.View`
  flex: 1;
`
export const StyledSafeAreaView = styled(RNSafeAreaView)`
  flex: 1;
`

export const layoutStyles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
})
