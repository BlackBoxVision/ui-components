import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 35,
    paddingTop: 5,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    width: 275,
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    paddingTop: 5,
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    width: 220,
  },
}));

export const LogoComponent = () => {
  const classes = useStyles();
  return (
    <Link to="/">
      <img
        alt="logo"
        className={classes.logo}
        src="https://www.blackbox-vision.tech/static/header-logo.light-eede249bf23b22e5de4b5a52ea223489.png"
      />
    </Link>
  );
};
