import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  card: {
    background: (props: any) => `url(${props.image}) center / cover no-repeat`,
    borderRadius: 8,
    boxShadow: theme.shadows[2],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 400,
    transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    zIndex: 0,
    '&:hover': {
      boxShadow: theme.shadows[16],
      transform: 'scale(1.05)',
    },
    '&::after': {
      content: '""',
      background:
        'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 0.8) 100%)',
      height: '100%',
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: -1,
    },
  },
  cardText: {
    color: theme.palette.common.white,
    zIndex: 1,
  },
}));
