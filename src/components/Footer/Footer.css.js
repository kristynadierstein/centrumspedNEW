import styled from "@emotion/styled";
import { theme } from "./../../styles";

export const FooterContainer = styled.div`
  min-height: 320px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    min-height: 250px;
    width: 100%;
    justify-content: space-between;
  }

  .Footer__WidthLimiter {
    padding: 40px 20px 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      padding: 50px 100px;
    }
  }

  .Footer__Logo {
    width: 180px;
    height: 60px;
    margin-bottom: 25px;

    @media (min-width: ${theme.breakpoints.md}) {
      width: 260px;
      height: 100px;
    }

    @media (min-width: ${theme.breakpoints.l}) {
      width: 360px;
      height: 100px;
    }
  }

  .Footer__AgencyCopyright {
    text-align: center;
    margin-bottom: 25px;
    letter-spacing: 0px;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.m_small};
      margin-bottom: 10px;
    }
  }

  .Footer__CopyrightText {
    margin-bottom: 25px;
    letter-spacing: 0px;
    text-align: center;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.m_small};
      margin-bottom: 0px;
      margin-right: 10px;
    }
  }

  .Footer__LegalLinks {
    font-size: ${theme.fonts.m_small};
    margin-right: 5px;
    opacity: 0.4;
    letter-spacing: 0px;
    text-align: center;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fonts.m_small};
      margin-left: 10px;
    }
  }
`;

export const SocialMediaFooterContainer = styled.div`
  margin-bottom: 30px;
  margin-left: -25px;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-left: 0px;
  }
`;

export const LegalLinksContainer = styled.div`
  display: flex;
  // width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    align-items: flex-end;
  }
`;

export const LegalContainerDesktop = styled.div`
  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`;
