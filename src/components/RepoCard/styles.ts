import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: '0.4rem',
    boxShadow: theme.shadows[2],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 150,
    height: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    '&:hover': {
      boxShadow: theme.shadows[13],
    },
  },
  title: {
    fontSize: '1rem',
    lineHeight: 1.2,
    fontWeight: 'bold',
    marginBottom: '1.25rem',
  },
  description: {
    fontSize: 16,
  },
  infoContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  info: {
    marginLeft: theme.spacing(),
    fontSize: 16,
  },
}));
