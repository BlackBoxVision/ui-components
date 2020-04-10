import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '11rem',
    marginBottom: '2rem',
    padding: '1rem',
    width: 'calc(99.9% * 1 / 3 - 2.5rem)',
  },
  infoContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  info: {
    marginLeft: theme.spacing(),
  },
}));
