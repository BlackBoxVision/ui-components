import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    background: (props: any) =>
      props.collapsed
        ? 'transparent'
        : `linear-gradient(45deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
    boxShadow: (props: any) =>
      props.collapsed ? theme.shadows[0] : theme.shadows[4],
    height: (props: any) => props.height,
    [theme.breakpoints.down('sm')]: {
      background: theme.palette.common.white,
    },
  },
  toolbar: {
    background: 'transparent',
    display: 'flex',
    height: (props: any) => props.height,
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row-reverse',
    },
    [theme.breakpoints.down('xs')]: {
      background: theme.palette.common.white,
    },
  },
}));
