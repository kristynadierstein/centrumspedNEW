import styled from "@emotion/styled";
import { theme } from "./../../styles";

export const TitleStyled = styled.span`
  font-family: ${theme.fontFamily.secondary};
  font-weight: normal;
  letter-spacing: 0px;
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  color: ${({ whiteTitle }) =>
    whiteTitle ? "white" : theme.colors.primaryblue};
  position: relative;
  padding-top: ${({ withGreenLine }) => (withGreenLine ? "30px" : "0px")};
  margin-bottom: 20px;
  display: block;
  line-height: 124%;


  &.Title__displayNone {
    display: none;
  }

  ${({ type }) => {
    switch (type) {
      case "h1":
        return `
        font-size: ${theme.fonts.xl_small};
        `;
      case "h1-secondary":
        return `
            font-size: ${theme.fonts.xxl_medium};
          `;

      case "h2":
        return `
          font-size: ${theme.fonts.xl_small};
          `;
      case "h3":
        return `
            font-size: ${theme.fonts.md};
            line-height: 1.1;
          `;
      case "h4":
        return `
            font-size: ${theme.fonts.md};
          `;
      case "h5":
        return `
        font-size: ${theme.fonts.m_small};
        `;
      default:
        //
        // Default Font Style
        //
        return `
            font-size: ${theme.fonts.md};
        `;
    }
  }};

  @media (min-width: ${theme.breakpoints.md}) {
    ${({ type }) => {
      switch (type) {
        case "h1":
          return `
            font-size: ${theme.fonts.xxxl_large};
          `;
        case "h1-secondary":
          return `
            font-size: ${theme.fonts.xxxl_medium};
          `;

        case "h2":
          return `
            font-size: ${theme.fonts.xxl_large}; 
          `;
        case "h3":
          return `
            font-size: ${theme.fonts.xxxl_small}; 
          `;
        case "h4":
          return `
            font-size: ${theme.fonts.md}; 
          `;
        case "h5":
          return `
            font-size: ${theme.fonts.xl_medium};
            `;
        default:
          //
          // Default Font Style
          //
          return `
            font-size: ${theme.fonts.xxl_large}; 
          `;
      }
    }};
  }

  .Title__Decoration {
    position: absolute;
    top: 15px;
    left: -71px;
  }
`;
