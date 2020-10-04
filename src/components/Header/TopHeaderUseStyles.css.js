import { makeStyles } from "@material-ui/core/styles";
import { theme as localTheme } from "../../styles";

export const topHeaderUseStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    justifyContent: "flex-end",
  },
  item: {
    color: "black",
  },
  link: {
    fontFamily: localTheme.fontFamily.primary,
    color: localTheme.colors.primaryblue,
    fontSize: localTheme.fonts.m_small,
    textTransform: "uppercase",
    cursor: "pointer",
    margin: "0",
    marginRight: "30px",
    display: "inline",
    fontWeight: "500",
    border: "1px solid white",
    letterSpacing: "3px",
  },
}));

export const flyoutMenuUseStyles = makeStyles((theme) => ({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: localTheme.colors.primaryblue,
    height: "auto",
    [theme.breakpoints.up("400")]: {
      height: "100%",
    }
  },
  nav__link_decoration: {
    display: "flex",
    alignItems: "center",
  },
  escBtn: {
    width: "16px",
    height: "16px",
    position: "absolute",
    top: "30px",
    right: "20px",
    cursor: "pointer",
  },
  link: {
    textTransform: "uppercase",
    fontSize: "37px",
    paddingBottom: "0",
    fontFamily: localTheme.fontFamily.secondary,
    lineHeight: "27px",
    letterSpacing: "3px",
    fontWeight: "500",
    border: `1px solid ${localTheme.colors.primaryred}`,
    textDecoration: "none",
    paddingLeft: "0px",
    "& a": {
      color: "white!important",
    },
    "& p": {
      color: "white!important",
    },
    [theme.breakpoints.up("600")]: {
      fontSize: "50px",
      lineHeight: "27px",
      letterSpacing: "3px",
    },
  },
}));
