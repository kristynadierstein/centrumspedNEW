import styled from "@emotion/styled"
import { theme } from "./../../styles"
import { animated } from "react-spring"

export const TextStyled = styled(animated.p)`
  font-family: ${theme.fontFamily.primary};
  font-weight: ${({ lightText }) => (lightText ? "100" : "400")};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  color: ${({ whiteText }) => (whiteText ? "white" : theme.colors.primaryblue)};
  margin-bottom: 0px;
  line-height: ${theme.lineHeight.primary};

  ${({ type }) => {
    switch (type) {
      case "primary":
        //
        // Primary Font Style
        //
        return `
        font-size: ${theme.fonts.s};
        `
      case "secondary":
        //
        // Secondary Font Style
        //
        return `
          font-size: ${theme.fonts.s};
          `
      case "secondary-small":
        //
        // Secondary Small Font Style
        //
        return `
              font-size: ${theme.fonts.m_small}; 
            `

      case "tertiary":
        //
        // Tertiary Font Style
        //
        return `
            font-size: ${theme.fonts.m_small};
          `
      case "tertiary-small":
        //
        //
        //
        return `
        font-size: ${theme.fonts.xs};
          `
      case "tertiary-large":
        //
        //
        //
        return `
        font-size: ${theme.fonts.xl_small};
          `
      default:
        //
        // Default Font Style
        //
        return `
            font-size: ${theme.fonts.m_small};
        `
    }
  }};

  @media (min-width: ${theme.breakpoints.md}) {
    ${({ type }) => {
      switch (type) {
        case "primary":
          //
          // Primary Font Style
          //
          return `
            font-size: ${theme.fonts.l};
          `
        case "secondary":
          //
          // Secondary Font Style
          //
          return `
            font-size: ${theme.fonts.m}; 
          `
        case "secondary-small":
          //
          // Secondary Small Font Style
          //
          return `
              font-size: ${theme.fonts.xl_small}; 
            `

        case "tertiary":
          //
          // Tertiary Font Style
          //
          return `
            font-size: ${theme.fonts.xl_medium}; 
          `
        case "tertiary-small":
          //
          //
          //
          return `
        font-size: ${theme.fonts.s};
          `
        case "tertiary-large":
          //
          //
          //
          return `
            font-size: ${theme.fonts.xxxl_small};
              `
        default:
          //
          // Default Font Style
          //
          return `
            font-size: ${theme.fonts.md}; 
          `
      }
    }};
  }
`
