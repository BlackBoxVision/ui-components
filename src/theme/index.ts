import { palette } from './palette';
import { typography } from './typography';
import {createMuiTheme, ThemeOptions} from "@material-ui/core";

export const defaultTheme: ThemeOptions = {
  palette: {
    ...palette,
    type: 'light',
  },
  typography: {
    fontFamily: "Ubuntu, 'sans-serif'",
    h6: {
      color: palette.tundora,
      fontSize: typography.sizes.h6,
      fontWeight: 600,
    },
    body1: {
      color: palette.doveGray,
    },
    subtitle2: {
      color: palette.common.white,
    },
  },
}

export const theme = createMuiTheme(defaultTheme)