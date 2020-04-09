import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
  },
}));
