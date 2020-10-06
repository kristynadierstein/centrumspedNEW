import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import {  Wrapper } from "../components";
import website from "../../config/website";
import LocaleContext from "./../context/LocaleProvider";
import { getQuery } from "./../functions/getQuery";
// import SEO from "../components/SEO";
import BackgroundImage from "gatsby-background-image";
import {
  HeroSection,
  HeroSubtitleContainer,
} from "./../components/PagesLayout/Index.css";
import Title from "./../components/Title/Title";
import Text from "./../components/Text/Text";
import ProduktySekce from "./../components/PagesSections/Produkty";
import IELALogo from "./../images/iela-transparent.svg";
import CardsSection from "./../components/PagesSections/CardsSection"


const IndexWrapper = Wrapper.withComponent("main");

const StyledBackground = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: contrast(80%)
  }
`

const Index = ({ pageContext: { locale }, location, data }) => {
  const lang = React.useContext(LocaleContext);
  const i18 = lang.i18n[lang.locale];
  const query = getQuery(["homepage", "nodes", 0, "data"], data);

  console.log("i18", i18);
  console.log("locale", locale);
  console.log(lang);

  console.log("data", query);

  return (
    <>
      {/* <SEO pathname={location.pathname} locale={locale} /> */}
      <HeroSection>
        <StyledBackground
          fluid={query?.hero_image?.localFile?.childImageSharp?.fluid}
          className="Hero__Image"
        >
          <Title type="h1" as="h1" whiteTitle className="HeroTitle">
            {query?.hero_title.text}
          </Title>

          <HeroSubtitleContainer>
            <IELALogo className="iela-logo" />
            <Title
              type="h5"
              as="h5"
              whiteTitle
              customStyle={{ marginBottom: "0px" }}
            >
              {query?.hero_subtitle.text}
            </Title>
          </HeroSubtitleContainer>
        </StyledBackground>
      </HeroSection>
      <IndexWrapper
        id={website.skipNavId}
        style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <ProduktySekce data={query} locale={locale} />
        <CardsSection data={query}/>
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

export const pageQuery = graphql`
  query homePageQuery($locale: String!) {
    homepage: allPrismicHome(filter: { lang: { eq: $locale } }) {
      nodes {
        data {
          card_1_body {
            text
          }
          card_1_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          card_1_title {
            text
          }
          card_2_body {
            text
          }
          card_2_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          card_2_title {
            text
          }
          card_3_body {
            text
          }
          card_3_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          card_3_title {
            text
          }
          card_4_body {
            text
          }
          card_4_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          card_4_title {
            text
          }
          cz_contact_address {
            text
            html
          }
          cz_contact_body {
            html
            text
          }
          cz_contact_description {
            html
            text
          }
          cz_contact_details {
            html
            text
          }
          cz_contact_images {
            cz_contact_image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          cz_contact_subtitle {
            text
            html
          }
          cz_contact_title {
            html
            text
          }
          hero_image {
            localFile {
              childImageSharp {
                fluid(quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          hero_subtitle {
            text
          }
          hero_title {
            text
          }
          intl_contact_address {
            text
          }
          intl_contact_body {
            text
            html
          }
          intl_contact_description {
            text
            html
          }
          intl_contact_details {
            html
            text
          }
          intl_contact_images {
            intl_contact_image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          intl_contact_subtitle {
            text
            html
          }
          intl_contact_title {
            html
            text
          }
          legal_footer_notes {
            html
            text
          }
          legal_label {
            text
          }
          legal_link {
            slug
          }
          partners_title {
            text
          }
          section_about_body {
            text
            html
          }
          section_about_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          section_about_title {
            text
          }
          section_contact_title {
            text
          }
          section_produkty_body {
            text
          }
          section_produkty_box_1_body {
            text
          }
          section_produkty_box_1_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          section_produkty_box_1_title {
            text
          }
          section_produkty_box_2_body {
            text
          }
          section_produkty_box_2_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          section_produkty_box_2_title {
            text
          }
          section_produkty_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          section_title_produkty {
            text
          }
          sk_contact_address {
            text
            html
          }
          sk_contact_body {
            html
            text
          }
          sk_contact_description {
            html
            text
          }
          sk_contact_details {
            html
            text
          }
          sk_contact_images {
            sk_contact_image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          sk_contact_subtitle {
            text
            html
          }
          sk_contact_title {
            html
            text
          }
          top_footer_content_main {
            html
            text
          }
        }
        lang
      }
    }
  }
`;
