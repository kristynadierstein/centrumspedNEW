import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import LocaleContext from "../../context/LocaleProvider";
import { MainNavigationContainer, MainNavigationWrapper } from "./Main.css.js";
import TopHeader from "./../Header/TopHeader";
import LocalizedLink from "./../LocalizedLink";

const Main = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      allPrismicMenuItems {
        nodes {
          lang
          data {
            menu_items {
              menu_item {
                text
              }
              menu_link {
                text
              }
            }
          }
        }
      }
    }
  `);

  const lang = React.useContext(LocaleContext);
  const i18 = lang.i18n[lang.locale];
  // const header = data.header.nodes
  //   .filter((node) => node.lang === i18n.locale)
  //   .map((r) => r.data);

  console.log("locale", i18);

  return (
    <MainNavigationContainer>
      <MainNavigationWrapper>
        <LocalizedLink to="/">
          <img
            className="Header__Logo"
            src={
              "https://images.prismic.io/centrumspednew/3c89030c-61bf-45c1-8a75-ab110bde16b9_Asset+1%403x-100.jpg?auto=compress,format"
            }
            alt="header-logo"
          />
        </LocalizedLink>
        <TopHeader data={data} location={location} />
      </MainNavigationWrapper>
    </MainNavigationContainer>
  );
};

Main.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Main;
