import { css } from "@emotion/core"
import theme from "./theme"
import reset from "./reset"

const globalStyle = css`
  ${reset}
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }
  body {
    color: ${theme.colors.primaryblue};
    background-color: ${theme.colors.bg};
    scroll-behavior: smooth;
    overflow: visible;
  ::selection {
    color: "white",
    background-color: ${theme.colors.primaryblue};
  }
  .mobile_filter_drawer {
    .MuiDrawer-paper{
      border: none;
      max-width: 100%;
      .MuiPaper-root{
        overflow-y: scroll;
      }
    }
  }
`

export default globalStyle
