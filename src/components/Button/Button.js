import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonMaterial } from "@material-ui/core";
import { buttonUseStyles } from "./Button.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import LocalizedLink from "./../LocalizedLink";

let theme = createMuiTheme({})
theme = {
  ...theme,
  overrides: {
    MuiButton: {
      label: {
        display: "flex",
        "& .Button__withPlay": {
          marginLeft: "20px",
        },
      },
    },
  },
}

const Button = ({
  children,
  buttonType,
  customClassName,
  linkDestination,
  href,
  customStyle,
  uppercase,
  type,
  disabled,
  withPlay,
  dataIdentifier,
  clickHandler = () => console.log("default click handler"),
}) => {
  const classes = buttonUseStyles()
  const buttonProps = {
    children,
    uppercase,
    type: type === "submit" ? "submit" : "button",
    style: customStyle ? customStyle : null,
    "data-identifier": dataIdentifier ? dataIdentifier : "",
  };

  let theme = createMuiTheme({});
  theme = {
    ...theme,
    overrides: {
      MuiButton: {
        label: {
          display: "flex",
          textTransform: uppercase ? "uppercase" : "none",
          "& .Button__withPlay": {
            marginLeft: "20px",
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <ButtonMaterial
        role="button"
        {...buttonProps}
        className={
          customClassName
            ? `Button ${customClassName} ${classes.root} ${classes[buttonType]}`
            : `Button ${classes.root} ${classes[buttonType]}`
        }
        onClick={clickHandler ? clickHandler : ""}
        disabled={disabled}
        href={href ? href : ""}
      >
        {linkDestination ? (
          <LocalizedLink to={`/${linkDestination}`}>{children}</LocalizedLink>
        ) : (
          children
        )}
      </ButtonMaterial>
    </ThemeProvider>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  customClassName: PropTypes.string,
  linkDestination: PropTypes.string,
  buttonType: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "quinary",
  ]).isRequired,
  customStyle: PropTypes.object,
  type: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  withPlay: PropTypes.bool,
}

export default Button
