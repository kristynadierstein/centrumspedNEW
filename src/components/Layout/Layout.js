/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { useRef, useContext } from "react";
import PropTypes from "prop-types";
import "@reach/skip-nav/styles.css";
import { Wrapper } from "./../Wrapper/Wrapper.css";
import Footer from "./../Footer/Footer";


const Layout = ({ children, location }) => {
  const scrollRef = useRef(null);

  return (
    <>
      <Wrapper ref={scrollRef} >{children}</Wrapper>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default Layout;
