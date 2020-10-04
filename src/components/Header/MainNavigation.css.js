import styled from "@emotion/styled"
import { theme } from "./../../styles"

export const MainNavigationWrapper = styled.div`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  @media (min-width: ${theme.breakpoints.md}) {
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 50px;
    min-height: 100px;
    justify-content: center;
  }

  @media (min-width: 1310px) {
    padding: 0 100px;
  }
`

export const MainNavigationContainer = styled.div`
  background-color: ${theme.colors.bg};
  position: fixed;
  z-index: 5;
  width: 100%;

  .Header__Logo {
    max-width: 200px;
    margin-left: 20px;

    @media (min-width: ${theme.breakpoints.md}) {
      max-width: 400px;
      margin-right: 50px;
      margin-left: 0;
    }
  }
`

export const TopHeaderContainerDesktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${theme.maxWidthDesktop};

  .Navigation__Button {
    margin-right: 60px;
    min-width: auto;
  }
`

export const TopHeaderContainerMobile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .Header__HamburgerIcon {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    cursor: pointer;
  }

  .Header__TextMobile {
    text-transform: initial;
    margin-right: 20px;
  }
`

export const LocaleSwitcherStyled = styled.div`
  @media (min-width: ${theme.breakpoints.l}) {
    &:hover {
      .Header__LanguageSwitcher-button {
        color: ${theme.colors.primaryblue};
      }
    }
  }

  .Header__LanguageSwitcher-button {
    font-weight: 500;
    transition: none;
    color: ${theme.colors.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fonts.m_small};
    cursor: pointer;
    margin: 0;
    letter-spacing: 3px;
    text-align: left;
    margin-right: 5px;
    opacity: 0.6;

    @media (min-width: ${theme.breakpoints.s}) {
      font-size: ${theme.fonts.md};
    }

    @media (min-width: ${theme.breakpoints.l}) {
      color: ${theme.colors.primaryblue};
      font-size: ${theme.fonts.m_small};
    }
  }

  .not-active {
    opacity: 0.6;
  }

  .current {
    opacity: 1;
  }
`

export const LanguageSwitcherContainer = styled.div`
  display: inline-flex;
  max-width: 100px;

  p {
    margin-bottom: 0px !important;

    @media (min-width: ${theme.breakpoints.s}) {
      font-size: ${theme.fonts.md};
    }

    @media (min-width: ${theme.breakpoints.md}) {
      max-width: 80px;
    }

    @media (min-width: ${theme.breakpoints.l}) {
      font-size: ${theme.fonts.m_small};
    }
  }

  .Header__LanguageSwitcher-button {
    .current {
      color: white !important;
    }

    @media (max-width: ${theme.breakpoints.l}) {
      justify-content: end;

      &: focus {
        outline: none !important;
      }
    }
  }
`

export const FlyoutMenuContainer = styled.div`
  padding-top: 40px;
  padding-left: 40px;
  margin-top: 140px;
  height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  .FlyoutNavigation__Button {
    margin-left: -20px;
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: ${theme.fonts.md};
    padding: 9px 18px;
    max-width: 200px;
  }

  .FlyoutNavigation__MenuItems {
    letter-spacing: 3px;

    @media (min-width: ${theme.breakpoints.s}) {
      font-size: ${theme.fonts.md};
    }
  }
`

export const TopContainerFlyout = styled.div`
  width: 100%;
  display: flex;
  align-items: self-end;
  justify-content: space-between;
  position: fixed;
  min-height: 130px;
  background-color: ${theme.colors.primaryblue};
  top: 0px;
  z-index: 10000;
  max-width: 400px;

  .Flyout__Logo {
    width: 50px;
    height: 50px;
    margin: 15px;
  }

  .Flyout-Top-left {
    display: inline-flex;
    align-items: center;
  }

  .Flyout__MenuText {
    font-size: ${theme.fonts.xl_medium};
    margin-left: 10px;
  }

  .Header__LanguageSwitcher-button {
    color: white !important;
  }

  .Flyout__SearchInput {
    position: absolute;
    width: inherit;
  }

  .Flyout__SearchIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -25px;
    left: 20px;
    width: 71px;
    height: 50px;
    background-color: white;
    border: 1px solid ${theme.colors.primaryblue};
  }
`
