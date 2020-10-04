import Typography from "typography";
import theme from '../src/styles/theme';
// This website uses the system font stack after the placed "Lora" font
// The scaleRatio will be overwritten for smaller breakpoints in src/components/Layout

const typography = new Typography({
  googleFonts: [
    {
      name: theme.fontFamily.primary,
      styles: ['400', '500', '600', '700']
    },
    {
      name: theme.fontFamily.secondary,
      styles: ['400', '500', '600', '700']
    },
    {
      name: theme.fontFamily.tertiary,
      styles: ['400', '500', '600', '700']
    }
  ],
  headerFontFamily: [
    "Helvetica",
    "Messina Sans",
    "Myriad",
    "Roboto Mono",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  bodyFontFamily: [
    "Helvetica",
    "Messina Sans",
    "Myriad",
    "Roboto Mono",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
});

export default typography;
