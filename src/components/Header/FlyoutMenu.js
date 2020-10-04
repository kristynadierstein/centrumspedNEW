import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"
import { MenuItem } from "@material-ui/core"
import { theme as localTheme } from "../../styles"
import { FlyoutMenuContainer } from "./MainNavigation.css"
import LocaleComponent from "./LocaleComponent"
import LocalizedLink from "./../LocalizedLink"
import { flyoutMenuUseStyles } from "./TopHeaderUseStyles.css"
import { LocaleSwitcherStyled, TopContainerFlyout } from "./MainNavigation.css"
import Text from "./../Text/Text"
import { EscBtn } from "./../Icons/EscBtn"
import Button from "./../Button/Button"


let theme = createMuiTheme({})
theme = {
  ...theme,
  overrides: {
    MuiPaper: {
      root: {
        width: "100%",
      },
    },
    MuiList: {
      root: {
        maxWidth: "400px",
        marginBottom: "30px",
      },
      padding: {
        [theme.breakpoints.up("600")]: {
          paddingTop: "50px",
        },
      },
    },
    MuiDrawer: {
      paper: {
        border: `1px solid ${localTheme.colors.primaryblue}`,
        maxWidth: "400px",
        justifyContent: "space-between",
      },
    },
    MuiListItemText: {
      root: {
        border: `1px solid ${localTheme.colors.primaryred}`,
        textDecoration: "none",
        "&:focus": {
          border: "1px solid white",
          padding: "3px",
        },
        "&:active": {
          border: "1px solid white",
          padding: "14px 3px 0px",
        },
      },
      primary: {
        "&:focus": {
          padding: "0px",
          paddingLeft: "4px",
          paddingRight: "4px",
        },
      },
    },
    MuiListItem: {
      root: {
        paddingBottom: "30px !important",
        paddingTop: "0px!important",
      },
      gutters: {
        paddingLeft: "0px",
        paddingRight: "0px",
      },
    },
    MuiInput: {
      root: {
        position: "absolute",
        border: `1px solid ${localTheme.colors.primaryblue}`,
        width: `calc(100% - 30px)`,
        backgroundColor: "white",
        height: "50px",
        right: "50%",
        transform: "translate(50%, -50%)",
        top: "130px",
      },
    },
    MuiInputBase: {
      input: {
        color: localTheme.colors.primaryblue,
        fontSize: localTheme.fonts.s,
        padding: "13px 16px",
      },
    },
    MuiSvgIcon: {
      root: {
        marginRight: "20px",
        paddingRight: "0px",
        cursor: "pointer",
      },
    },
  },
}

const FlyoutMenu = ({ open, onOpen, onClose, data, location }) => {
  
  useEffect(() => {
    if (open) {
      document.querySelector("html").style.overflow = "hidden"
    } else {
      document.querySelector("html").style.overflow = ""
    }
  }, [open])

  const classes = flyoutMenuUseStyles()

  const clickHandler = onClose

  const menuItems = data[0].menu_items

  console.log("menuItems", menuItems[0].menu_items)

  return (
    <ThemeProvider theme={theme}>
      <SwipeableDrawer open={open} onOpen={onOpen} onClose={onClose}>
        <TopContainerFlyout>
          {/* <div className="Flyout-Top-left">
            {menuItems.logo_flyout ? (
              <LocalizedLink to="/">
                <img
                  className="Flyout__Logo"
                  src={menuItems.logo_flyout.url}
                  alt="flyout-logo"
                />
              </LocalizedLink>
            ) : (
              ""
            )}
          </div> */}
          <EscBtn className={classes.escBtn} clickHandler={onClose} />
        </TopContainerFlyout>

        <div
          className={classes.sidebar}
          role="presentation"
          onKeyDown={onClose}
          onClick={onClose}
        >
          <FlyoutMenuContainer>
            <List className="Header__MenuList">
              {menuItems.length > 0 &&
                menuItems.map((item, index) => {
                  return (
                    <MenuItem key={index}>
                      <LocalizedLink to={`/${item.menu_link.text}`}>
                        <Text className="FlyoutNavigation__MenuItems" whiteText>
                          {item.menu_item.text}
                        </Text>
                      </LocalizedLink>
                    </MenuItem>
                  )
                })}
              <LocaleSwitcherStyled
                data-name="locale-switcher"
                className={`${classes.link} LocaleSwitcher`}
                customStyle={{ color: "white" }}
              >
                <LocaleComponent location={location} />
              </LocaleSwitcherStyled>
            </List>
            {/* {menuItems.button_link_mobile && menuItems.button_text_mobile ? (
              <Button
                linkDestination={menuItems.button_link_mobile.uid}
                buttonType="quaternary"
                customClassName="FlyoutNavigation__Button"
              >
                {menuItems.button_text_mobile.text}
              </Button>
            ) : (
              ""
            )} */}
          </FlyoutMenuContainer>
        </div>
      </SwipeableDrawer>
    </ThemeProvider>
  )
}

FlyoutMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default FlyoutMenu
