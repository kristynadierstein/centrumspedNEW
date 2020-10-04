import React from "react"
// import {
//   FooterContainer,
//   SocialMediaFooterContainer,
//   LegalLinksContainer,
//   FooterContentContainer,
//   LegalContainerDesktop,
// } from "./Footer.css"
// import { useStaticQuery, graphql } from "gatsby"
import LocaleContext from "./../../context/LocaleProvider"
// import SocialMedia from "components/SocialMedia/SocialMedia"
// import Text from "components/Text/Text"
// import { Link } from "gatsby"
// import { Mobile } from "components/Media/Media"
import { WidthLimiterContainer } from "../Layout/WidthLimiter.css"

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query FooterQuery {
  //     footer: allPrismicFooter {
  //       nodes {
  //         lang
  //         data {
  //           copyright_text {
  //             text
  //           }
  //           legal_sections {
  //             link {
  //               uid
  //             }
  //             text {
  //               text
  //             }
  //           }
  //           logo {
  //             url
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const lang = React.useContext(LocaleContext)
  const i18n = lang.i18n[lang.locale]

  // const footerData = data.footer.nodes
  //   .filter((node) => node.lang === i18n.locale)
  //   .map((r) => r.data)

  // const today = new Date()
  // const year = today.getFullYear()

  return (
    <FooterContainer>
      <WidthLimiterContainer className="Footer__WidthLimiter">
        {/* {footerData[0].logo ? (
          <img
            className="Footer__Logo"
            src={footerData[0].logo.url}
            alt="footer-logo"
          />
        ) : (
          ""
        )} */}
        {/* <FooterContentContainer>
          <SocialMediaFooterContainer>
            <SocialMedia />
          </SocialMediaFooterContainer>

          <Text className="Footer__AgencyCopyright">
            DESIGN + DIGITAL DEVELOPMENT BY{" "}
            <Mobile>
              <br />
            </Mobile>{" "}
            <strong>FIELD OFFICE</strong>
          </Text>
          <LegalContainerDesktop>
            {footerData[0].copyright_text ? (
              <Text className="Footer__CopyrightText">{`© ${year} ${footerData[0].copyright_text.text}`}</Text>
            ) : (
              ""
            )}
            <LegalLinksContainer>
              {footerData[0].legal_sections.length > 0
                ? footerData[0].legal_sections.map((section, index) => {
                    return (
                      <Link
                        key={`LegalSectionsLink -  ${index}`}
                        to={section.link.uid}
                      >
                        <Text className="Footer__LegalLinks">
                          {section.text.text}
                        </Text>
                      </Link>
                    )
                  })
                : ""}
            </LegalLinksContainer>
          </LegalContainerDesktop>
        </FooterContentContainer> */}
      </WidthLimiterContainer>
    </FooterContainer>
  )
}

export default Footer
