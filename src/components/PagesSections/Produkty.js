import React from "react";
import PropTypes from "prop-types";
import {
  SectionContainerStyled,
  LeftSideContainer,
  SubSectionContainer,
  SectionBody,
  SubSectionContainerRight,
} from "./Produkty.css";
import Title from "./../Title/Title";
import Text from "./../Text/Text";
import Img from "gatsby-image";
import { Mobile, Desktop } from "./../Media/Media";
import LocalizedLink from "./../LocalizedLink";

const Produkty = ({ data, locale }) => {
  console.log(data);

  return (
    <>
      <SectionContainerStyled>
        <LeftSideContainer>
          <Desktop>
            <Title withDecoration className="Produkty_Title" type="h2" as="h2">
              {data.section_title_produkty.text}
            </Title>
          </Desktop>
          <Mobile>
            <Title className="Produkty_Title-mobile" type="h2" as="h2">
              {data.section_title_produkty.text}
            </Title>
          </Mobile>
          <Text className="Produkty_Body">
            {data.section_produkty_body.text}
          </Text>
        </LeftSideContainer>
        <Img
          fluid={data.section_produkty_image.localFile.childImageSharp.fluid}
          className="Products_Image-desktop"
        />
      </SectionContainerStyled>
      <SubSectionContainer>
        <SectionBody>
          <Title as="h4" type="h4" className="Produkty_Title-subsection">
            {data.section_produkty_box_1_title.text}
          </Title>
          <Text type="secondary">{data.section_produkty_box_1_body.text}</Text>
          <br />
          {locale === "cs-cz" ? (
            <Text type="secondary" className="Section__Body">
              Více naleznete na: 
              <LocalizedLink to="/">
                VELETRŽNÍ LOGISTIKA ČESKÁ REPUBLIKA – kancelář Praha
              </LocalizedLink>{" "}
              nebo{" "}
              <LocalizedLink to="/">
                VELETRŽNÍ LOGISTIKA SLOVENSKO – kancelář Nitra.
              </LocalizedLink>
               
            </Text>
          ) : (
            <Text type="secondary" className="Section__Body">
              Find out more at:{" "}
              <LocalizedLink to="/">
                EXHIBITION LOGISTICS CZECH REPUBLIC – Prague office
              </LocalizedLink>{" "}
              or{" "}
              <LocalizedLink to="/">
                EXHIBITION LOGISTICS SLOVAKIA – Nitra office
              </LocalizedLink>
               
            </Text>
          )}
        </SectionBody>
        <Img
          fluid={
            data.section_produkty_box_1_image.localFile.childImageSharp.fluid
          }
          className="Products_Image-desktop"
        />
      </SubSectionContainer>
      <SubSectionContainerRight>
        <SectionBody>
          <Title as="h4" type="h4" className="Produkty_Title-subsection">
            {data.section_produkty_box_2_title.text}
          </Title>
          <Text type="secondary">{data.section_produkty_box_2_body.text}</Text>
          <br />
          {locale === "cs-cz" ? (
            <Text type="secondary" className="Section__Body">
              Více naleznete na: 
              <LocalizedLink to="/">
                VELETRŽNÍ LOGISTIKA V ZAHRANIČÍ – kancelář Brno
              </LocalizedLink>{" "}
               
            </Text>
          ) : (
            <Text type="secondary" className="Section__Body">
              Find out more at:{" "}
              <LocalizedLink to="/">
                EXHIBITION LOGISTICS WORLDWIDE – Brno office
              </LocalizedLink>{" "}
            </Text>
          )}
        </SectionBody>
        <Img
          fluid={
            data.section_produkty_box_2_image.localFile.childImageSharp.fluid
          }
          className="Products_Image-desktop"
        />
      </SubSectionContainerRight>
    </>
  );
};

Produkty.propTypes = {};

export default Produkty;
