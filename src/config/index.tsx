import BackgroundImage from './BackgroundImage';
import colors from './colors';
import colorsDark from './colorsDark';
import fonts from './fonts';
import ThemeProvider, { ThemeConsumer, ThemeContext } from './ThemeProvider';
import withTheme from './withTheme';
import { makeStyles, useTheme } from './makeStyles';
import { FullTheme } from './theme';

export {
  BackgroundImage,
  colors,
  colorsDark,
  fonts,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withTheme,
  useTheme,
  makeStyles,
};

export type { FullTheme };
