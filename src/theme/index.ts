import { createMuiTheme, Theme } from '@material-ui/core';

import { lightPalette, darkPalette } from './palette';
import { typography } from './typography';

export const lightTheme: Theme = createMuiTheme({
  palette: {
    ...lightPalette,
    type: 'light',
  },
  typography: {
    fontFamily: "Ubuntu, 'sans-serif'",
    h6: {
      color: lightPalette.tundora,
      fontSize: typography.sizes.h6,
      fontWeight: 600,
    },
    body1: {
      color: lightPalette.doveGray,
    },
    subtitle2: {
      color: lightPalette.common.white,
    },
  },
  overrides: {
    MuiFormControl: {
      root: {
        minHeight: 90,
      },
    },
    MuiFormHelperText: {
      root: {
        '&:Mui-Error': {
          color: lightPalette.error.dark,
        },
      },
    },
  },
});

export const darkTheme: Theme = createMuiTheme({
  palette: {
    ...darkPalette,
    type: 'dark',
  },
  typography: {
    fontFamily: "Ubuntu, 'sans-serif'",
  },
});
