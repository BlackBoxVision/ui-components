import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  form: {
    alignItems: 'center',
    boxShadow: theme.shadows[2],
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      boxShadow: theme.shadows[13],
    },
  },
  messageField: {
    minHeight: 135,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
  },
  submitBtn: {
    borderWidth: 2,
    borderRadius: 50,
    width: 130,
    '&:hover': {
      borderWidth: 2,
    },
  },
  error: {
    color: theme.palette.error.main,
    width: '100%',
  },
}));
