import React from "react"
import PropTypes from "prop-types"
import { TitleStyled } from "./Title.css"
import { TitleDecoration } from "./../Icons/TitleDecoration"

const Title = ({
  children,
  as = "span",
  type,
  customStyle,
  className,
  displayNone,
  uppercase,
  whiteTitle,
  withDecoration,
}) => {
  const textProps = {
    as,
    type,
    children,
    uppercase,
    whiteTitle,
    withDecoration,
    style: customStyle ? customStyle : null,
    className: className
      ? `${className} ${displayNone ? "Title__displayNone" : ""}`
      : "",
  }

  return (
    <TitleStyled {...textProps}>
      {withDecoration ? <TitleDecoration className="Title__Decoration" /> : ""}
      {children}
    </TitleStyled>
  )
}

Title.propTypes = {
  children: PropTypes.any,
  uppercase: PropTypes.bool,
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "span"]),
  whiteTitle: PropTypes.bool,
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h1-secondary"]),
  className: PropTypes.string,
  customStyle: PropTypes.object,
  displayNone: PropTypes.bool,
  withGreenLine: PropTypes.bool,
}

export default Title
