import React, { useState } from "react"
import PropTypes from "prop-types"
// import { Grid } from "@material-ui/core"
// import SearchIcon from "@material-ui/icons/Search"
// import LocaleComponent from "./LocaleComponent"
import { LargeDesktopUp, LargeDesktopDown } from "./../Media/Media"
// import LocalizedLink from "components/LocalizedLink/LocalizedLink"
// import Button from "components/Button/Button"
// import { BurgerMenu } from "components/Icons/BurgerMenu"
// import FlyoutMenu from "./FlyoutMenu"
// import { LocaleSwitcherStyled } from "./Main.css"
import { topHeaderUseStyles } from "./TopHeaderUseStyles.css"
// import Text from "components/Text/Text"
// import {
//   TopHeaderContainerDesktop,
//   TopHeaderContainerMobile,
//   NavigationDesktopSearch,
// } from "./Main.css"

const TopHeader = ({ data, location }) => {
  const [openSidebar, setopenSidebar] = useState(false)

  const searchHandler = () => {
    console.log("I am searching....")
  }
  const handleSidebarOpen = () => {
    setopenSidebar(true)
  }

  const handleSidebarClose = () => {
    setopenSidebar(false)
  }

  const classes = topHeaderUseStyles()
  return (
    <>
      <LargeDesktopUp>
        <TopHeaderContainerDesktop>
          {/* <Grid container className={classes.container}>
            {data.menu_items &&
              data.menu_items.length > 0 &&
              data.menu_items.map((item, index) => {
                return (
                  <Grid item key={index} className={classes.item}>
                    <LocalizedLink
                      to={`/${item.link.uid}`}
                      className={`${classes.link}`}
                      activeClassName="active"
                    >
                      {item.link_text.text}
                    </LocalizedLink>
                  </Grid>
                )
              })}
          </Grid> */}
          {/* <NavigationDesktopSearch>
            {data.button_link && data.button_label ? (
              <Button
                linkDestination={data.button_link.uid}
                buttonType="primary"
                customClassName="Navigation__Button"
              >
                {data.button_label.text}
              </Button>
            ) : (
              ""
            )}
            <a href={"/search"} style={{ textDecoration: "none" }}>
              <SearchIcon
                onClick={searchHandler}
                className="Navigation_SearchIcon"
              />
            </a>
            <LocaleSwitcherStyled
              data-name="locale-switcher"
              className={`LocaleSwitcher`}
            >
              <LocaleComponent location={location} />
            </LocaleSwitcherStyled>
          </NavigationDesktopSearch> */}
        </TopHeaderContainerDesktop>
      </LargeDesktopUp>
      {/* <LargeDesktopDown>
        <TopHeaderContainerMobile>
          {data.menu_text ? (
            <Text type="tertiary" className="Header__TextMobile">
              {data.menu_text.text}
            </Text>
          ) : (
            ""
          )}
          <svg className="Header__HamburgerIcon" onClick={handleSidebarOpen}>
            <BurgerMenu className="Header__HamburgerIcon" />
          </svg>
          {data ? (
            <FlyoutMenu
              open={openSidebar}
              onOpen={handleSidebarOpen}
              onClose={handleSidebarClose}
              menuItems={data}
              location={location}
            />
          ) : (
            ""
          )}
        </TopHeaderContainerMobile>
      </LargeDesktopDown> */}
    </>
  )
}

TopHeader.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default TopHeader
