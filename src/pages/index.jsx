import React  from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Listing, Wrapper, Title } from "../components";
import website from "../../config/website";
import LocaleContext  from "./../context/LocaleProvider";
// import SEO from "../components/SEO";

const Hero = styled.header`
  background-color: ${(props) => props.theme.colors.greyLight};
  display: flex;
  align-items: center;
`;

const HeroInner = styled(Wrapper)`
  padding-top: 13rem;
  padding-bottom: 13rem;
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;


const IndexWrapper = Wrapper.withComponent("main");

const Index = ({
  pageContext: { locale },
  location,
}) => {
  const lang = React.useContext(LocaleContext);
  const i18n = lang.i18n[lang.locale];

  console.log("lang", i18n)
  console.log(lang)

  return (
    <>
      {/* <SEO pathname={location.pathname} locale={locale} /> */}
      <Hero>
        <HeroInner>Hello</HeroInner>
      </Hero>
      <IndexWrapper
        id={website.skipNavId}
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        {/* <Title style={{ marginTop: "4rem" }}>{i18n.recent} Posts</Title>

        <Title style={{ marginTop: "8rem" }}>
          {i18n.recent} {i18n.projects}
        </Title> */}
      </IndexWrapper>
    </>
  );
};

export default Index;

Index.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

