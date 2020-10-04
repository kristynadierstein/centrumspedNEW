import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export const LargeDesktopDown = ({ children }) => {
  const theme = useTheme();
  const isLargeDesktopDown = useMediaQuery(theme.breakpoints.down('1200'));
  return isLargeDesktopDown ? children : null;
};

export const LargeDesktopUp = ({ children }) => {
  const theme = useTheme();
  const isLargeDesktopUp = useMediaQuery(theme.breakpoints.up('1200'));
  return isLargeDesktopUp ? children : null;
};

export const Desktop = ({ children }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('960'));
  return isDesktop ? children : null;
};

export const Mobile = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('960'));
  return isMobile ? children : null;
};