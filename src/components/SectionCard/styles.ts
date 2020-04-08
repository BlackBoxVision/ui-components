import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
  },
  cardContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImg: {
    height: 'auto',
    maxHeight: 200,
    marginBottom: theme.spacing(2),
  },
}));
