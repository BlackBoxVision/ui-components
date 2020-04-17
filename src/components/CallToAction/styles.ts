import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  cta: {
    borderRadius: 50,
    animation: '$pulse 2.1s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(0.95)',
      boxShadow: ({ ctaColor }: any) =>
        `0 0 0 0 ${ctaColor ? ctaColor : theme.palette.primary.light}`,
    },
    '70%': {
      transform: 'scale(1)',
      boxShadow: '0 0 0 15px rgba(0, 0, 0, 0)',
    },
    '100%': {
      transform: 'scale(0.95)',
      boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
    },
  },
}));
