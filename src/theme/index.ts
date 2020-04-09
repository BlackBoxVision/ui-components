import { createMuiTheme } from '@material-ui/core/styles';
import { palette } from './palette';
import { typography } from './typography';

export const theme = createMuiTheme({
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
  },
});
