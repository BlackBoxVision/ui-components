import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 16,
    overflow: 'visible',
    position: 'relative',
    zIndex: 1,
  },
  personName: {
    color: theme.palette.common.black,
    fontWeight: 600,
  },
  personCharge: {
    color: '#666',
    fontStyle: 'italic',
  },
  avatar: {
    boxShadow: theme.shadows[2],
    left: -20,
    position: 'absolute',
    top: 20,
    zIndex: 2,
  },
  cardContent: {
    padding: theme.spacing(0, 4),
  },
  testimonial: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.09)',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
  },
  cardActions: {
    alignItems: 'center',
    display: 'flex',
    height: 55,
    justifyContent: 'center',
  },
  companyLogo: {
    width: '3rem',
  },
}));
