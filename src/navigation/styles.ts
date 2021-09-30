import { StyleSheet } from "react-native"
import styled from "styled-components"
import { Image } from "@coin-mena-shared"
import { R } from "@coin-mena/res"

export const BackIcon = styled(Image)`
  width: ${R.spacing.larger}px;
  height: ${R.spacing.larger}px;
  margin-left: ${R.spacing.small}px;
  resize-mode: contain;
`

export const styles = StyleSheet.create({
  headerTitle: {
    textAlign: "center",
    fontSize: R.fontSize.bigger,
    color: R.color.header.title,
  },
  header: {
    height: R.spacing.veryGiant,
    shadowColor: "transparent",
    elevation: 0,
  },
})
