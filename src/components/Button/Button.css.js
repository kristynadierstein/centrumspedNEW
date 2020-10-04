import { makeStyles } from "@material-ui/core/styles";
import { theme as localTheme } from "../../styles";

export const buttonUseStyles = makeStyles((theme) => ({
  primary: {
    border: "1px solid white",
    backgroundColor: localTheme.colors.primaryblue,
    color: "white",
    "& a": {
      color: "white",
    },
    "&:hover": {
      color: localTheme.colors.primaryblue,
      backgroundColor: "white",
      border: `1px solid ${localTheme.colors.primaryblue}`,
      transition: "background-color 300ms ease-in",
      "& a": {
        color: localTheme.colors.primaryblue,
      },
      "& svg": {
        "& path": {
          fill: localTheme.colors.primaryblue,
        },
      },
    },
  },
  secondary: {
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
    "& a": {
      color: "white",
    },
    "&:hover": {
      color: localTheme.colors.primaryblue,
      backgroundColor: "white",
      border: `1px solid white`,
      transition: "background-color 300ms ease-in",
      "& a": {
        color: localTheme.colors.primaryblue,
      },
      "& svg": {
        "& path": {
          fill: localTheme.colors.primaryblue,
        },
      },
    },
  },
  tertiary: {
    border: "1px solid white",
    backgroundColor: localTheme.colors.green,
    "& a": {
      color: "white",
    },
    "&:hover": {
      color: localTheme.colors.green,
      backgroundColor: "white",
      border: `1px solid ${localTheme.colors.green}`,
      transition: "background-color 300ms ease-in",
      "& a": {
        color: localTheme.colors.green,
      },
      "& svg": {
        "& path": {
          fill: localTheme.colors.green,
        },
      },
    },
  },
  quaternary: {
    border: "1px solid white",
    backgroundColor: "white",
    "& a": {
      color: localTheme.colors.primaryblue,
    },
    "&:hover": {
      color: "white",
      backgroundColor: localTheme.colors.primaryblue,
      transition: "background-color 300ms ease-in",
      "& a": {
        color: "white",
      },
      "& svg": {
        "& path": {
          fill: "white",
        },
      },
    },
  },
  quinary: {
    border: `1px solid ${localTheme.colors.primaryblue}`,
    backgroundColor: "white",
    "& a": {
      color: localTheme.colors.primaryblue,
    },
    "& span": {
      color: localTheme.colors.primaryblue,
    },
    "&.active": {
      color: "white",
      backgroundColor: localTheme.colors.primaryblue,
      transition: "background-color 300ms ease-in",
      "& a": {
        color: "white",
      },
      "& span": {
        color: localTheme.colors.bg,
      },
    },
    "&:hover": {
      color: "white",
      backgroundColor: localTheme.colors.primaryblue,
      transition: "background-color 300ms ease-in",
      "& span": {
        color: localTheme.colors.bg,
      },
      "& a": {
        color: localTheme.colors.bg,
      },
      "& svg": {
        "& path": {
          fill: "white",
        },
      },
    },
  },
  root: {
    textTransform: "none",
    display: "inline-block",
    borderRadius: "0px",
    padding: "8px 8.5px",
    minWidth: "130px",
    position: "relative",
    fontSize: localTheme.fonts.s,
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: '400',
    textDecoration: "none",
    whiteSpace: `nowrap`,
    fontFamily: localTheme.fontFamily.primary,
    "&:focus": {
      outline: "none",
    },
    "&:disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
    },
    [theme.breakpoints.up("md")]: {
      padding: "9px 18px",
      fontSize: localTheme.fonts.md,
    },
  },
}));
