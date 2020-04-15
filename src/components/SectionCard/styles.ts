import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  card: {
    background: (props: any) => props.background || 'transparent',
  },
  cardContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImg: {
    height: 250,
  },
}));
