import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";
import LocaleContext  from "./../../context/LocaleProvider";
import { Grid } from "@material-ui/core"
import LocaleComponent from "./LocaleComponent"
import { LargeDesktopUp, LargeDesktopDown } from "./../Media/Media"
// import Button from "components/Button/Button"
import LocalizedLink from "./../LocalizedLink"
import { BurgerMenu } from "./../Icons/BurgerMenu"
import FlyoutMenu from "./FlyoutMenu"
import { LocaleSwitcherStyled } from "./MainNavigation.css"
import { topHeaderUseStyles } from "./TopHeaderUseStyles.css"
// import Text from "components/Text/Text"
import {
  TopHeaderContainerDesktop,
  TopHeaderContainerMobile,
  NavigationDesktopSearch,
} from "./MainNavigation.css"


const TopHeader = ({ data, location }) => {
  const [openSidebar, setopenSidebar] = useState(false)

  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  const headerQuery = data.allPrismicMenuItems.nodes
  .filter((node) => node.lang === i18n.locale)
  .map((r) => r.data)
  

  console.log(headerQuery)

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
          <Grid container className={classes.container}>
            {headerQuery?.[0]?.menu_items?.map((item, index) => {
                return (
                  <Grid item key={index} className={classes.item}>
                    <LocalizedLink
                      to={`/${item.menu_link.text}`}
                      className={`${classes.link}`}
                      activeClassName="active"
                    >
                      {item.menu_item.text}
                    </LocalizedLink>
                  </Grid>
                )
              })}
          </Grid>
        </TopHeaderContainerDesktop>
      </LargeDesktopUp>
      <LargeDesktopDown>
        <TopHeaderContainerMobile>
          {/* {data.menu_text ? (
            <Text type="tertiary" className="Header__TextMobile">
              {data.menu_text.text}
            </Text>
          ) : (
            ""
          )} */}
          <svg className="Header__HamburgerIcon" onClick={handleSidebarOpen}>
            <BurgerMenu className="Header__HamburgerIcon" />
          </svg>
          {data ? (
            <FlyoutMenu
              open={openSidebar}
              onOpen={handleSidebarOpen}
              onClose={handleSidebarClose}
              data={headerQuery}
              location={location}
            />
          ) : (
            ""
          )}
        </TopHeaderContainerMobile>
      </LargeDesktopDown>
    </>
  )
}

TopHeader.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default TopHeader
