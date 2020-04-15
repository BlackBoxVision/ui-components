import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    width: '100%',
  },
  cardImg: {
    height: 'auto',
    width: '100%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
