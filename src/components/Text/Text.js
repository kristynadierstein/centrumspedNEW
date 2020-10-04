import React from "react"
import PropTypes from "prop-types"
import { TextStyled } from "./Text.css"

const Text = ({
  children,
  className,
  customStyle,
  uppercase,
  type,
  whiteText,
  lightText,
  as = "p",
  dangerouslySetInnerHTML,
}) => {
  const textProps = {
    as,
    uppercase,
    whiteText,
    lightText,
    style: customStyle ? customStyle : null,
    className: className ? className : null,
    type,
  }

  return dangerouslySetInnerHTML ? (
    <TextStyled
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      {...textProps}
    />
  ) : (
    <TextStyled {...textProps}>{children}</TextStyled>
  )
}

Text.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  customStyle: PropTypes.object,
  type: PropTypes.string,
  as: PropTypes.string,
  uppercase: PropTypes.bool,
  whiteText: PropTypes.bool,
  lightText: PropTypes.bool,
  dangerouslySetInnerHTML: PropTypes.any,
}

export default Text
