import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  link: {
    borderRadius: '16px 16px 16px 0',
    color: theme.palette.secondary.main,
    cursor: 'pointer',
    fontWeight: 600,
    height: 45,
    margin: theme.spacing(),
    padding: theme.spacing(2),
    transition:
      'background-color 0.1s linear, border-radius 0.1s linear, color 0.1s linear',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '24px 24px 24px 0',
    },
  },
}));
