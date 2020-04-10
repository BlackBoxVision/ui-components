import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: theme.shadows[2],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 160,
    height: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    '&:hover': {
      boxShadow: theme.shadows[13],
    },
  },
  infoContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  info: {
    marginLeft: theme.spacing(),
  },
}));
