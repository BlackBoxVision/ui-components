import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  social: {
    color: theme.palette.common.white,
    background: (props: any) => props.background,
    cursor: 'pointer',
    '&:active, &:hover': {
      background: (props: any) => props.background,
      boxShadow:
        '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)',
      transform: 'translate3d(0, -5px, 0)',
    },
    margin: 4,
    height: 50,
    textDecoration: 'none',
    transition: 'all 250ms ease-out',
    width: 50,
  },
}));
