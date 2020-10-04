import styled from "@emotion/styled";
import { theme } from "./../../styles";

export const SectionContainerStyled = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding-right: 50px;
    padding-left: 50px;
    margin-top: 80px;
    flex-direction: row;
  }

  .Produkty_Title {
    border-bottom: 1px solid ${theme.colors.primaryblue};
    font-weight: 500;
  }

  .Produkty_Title-mobile {
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid ${theme.colors.primaryblue};
    font-weight: 500;
  }

  .Produkty_Body {
    text-align: center;
    margin-bottom: 20px;

    @media (min-width: ${theme.breakpoints.md}) {
      text-align: left;
      margin-bottom: 50px;
    }
  }

  .Products_Image-desktop {
    width: 100%;
    margin-right: 20px;

    @media (min-width: ${theme.breakpoints.md}) {
      margin-right: 50px;
      width: 600px;
    }
  }
`;

export const LeftSideContainer = styled.div`
  width: 100%;
  margin-right: 50px;

  @media (min-width: ${theme.breakpoints.md}) {
    width: 50%;
  }
`;

export const SubSectionContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  margin-bottom: 50px;

  @media (min-width: ${theme.breakpoints.md}) {
    padding-right: 50px;
    padding-left: 50px;
    margin-top: 80px;
    flex-direction: row-reverse;
    text-align: justify;
  }

  .Products_Image-desktop {
    width: 100%;
    margin-right: 20px;

    @media (min-width: ${theme.breakpoints.md}) {
      margin-right: 50px;
      width: 600px;
    }
  }

  .Section__Body {
    margin-bottom: 50px;

    a {
      color: ${theme.colors.primaryblue};
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const SectionImage = styled.div``;

export const SectionBody = styled.div`
  width: 100%;

  @media (min-width: ${theme.breakpoints.md}) {
    width: 50%;
  }

  .Produkty_Title-subsection {
    font-weight: 600;
  }
`;

export const SubSectionContainerRight = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  margin-bottom: 50px;

  @media (min-width: ${theme.breakpoints.md}) {
    padding-right: 50px;
    padding-left: 50px;
    margin-top: 80px;
    flex-direction: row;
    text-align: justify;
  }

  .Products_Image-desktop {
    width: 100%;

    @media (min-width: ${theme.breakpoints.md}) {
      margin-left: 50px;
      width: 600px;
    }
  }

  .Section__Body {
    margin-bottom: 50px;

    a {
      color: ${theme.colors.primaryblue};
      font-weight: 500;
      cursor: pointer;
    }
  }
`;
