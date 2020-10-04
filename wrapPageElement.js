/* eslint react/prop-types: 0, react/display-name: 0 */
import React from "react";
// import { ParallaxProvider } from "react-scroll-parallax"
import { LocaleProvider } from "./src/context/LocaleProvider";
import Layout from "./src/components/Layout/Layout";
import globalStyle from "./src/styles/global";
import { theme } from "./src/styles";
import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import MainNavigation from "./src/components/MainNavigation/Main";


const wrapPageElement = ({ element, props }) => {
  return (
    <LocaleProvider locale={props.pageContext.locale}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <MainNavigation location={props.location} />
        <Layout {...props}>{element}</Layout>
      </ThemeProvider>
    </LocaleProvider>
  );
};

export default wrapPageElement;
