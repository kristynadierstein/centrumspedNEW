import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import LocaleContext from '../../context/LocaleProvider';
import { MainNavigationContainer, MainNavigationWrapper } from './Main.css.js';
import TopHeader from "./../Header/TopHeader";


const Main = ({ location }) => {
  // const data = useStaticQuery(graphql`
  //   query HeaderQuery {
  //     header: allPrismicHeader {
  //       nodes {
  //         lang
  //         data {
  //           button_label {
  //             text
  //           }
  //           button_link {
  //             uid
  //           }
  //           search_placeholder {
  //             text
  //           }
  //           button_link_mobile {
  //             uid
  //           }
  //           button_text_mobile {
  //             text
  //           }
  //           logo {
  //             url
  //           }
  //           logo_flyout {
  //             url
  //           }
  //           menu_items {
  //             link {
  //               uid
  //             }
  //             link_text {
  //               text
  //             }
  //           }
  //           menu_text {
  //             text
  //           }
  //           mobile_menu_text {
  //             text
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const lang = useContext(LocaleContext);
  // const i18n = lang.i18n[lang.locale];
  // const header = data.header.nodes
  //   .filter((node) => node.lang === i18n.locale)
  //   .map((r) => r.data);

  return (
    <MainNavigationContainer>
      <MainNavigationWrapper>
        {/* <LocalizedLink to='/'> */}
          {/* <img className='Header__Logo' src={header[0].logo.url} alt="header-logo"/> */}
        {/* </LocalizedLink> */}
        {/* <TopHeader data={header[0]} location={location} /> */}
      </MainNavigationWrapper>
    </MainNavigationContainer>
  );
};

Main.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Main;
