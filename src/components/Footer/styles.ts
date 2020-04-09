import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  socialContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
