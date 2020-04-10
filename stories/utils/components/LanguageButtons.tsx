import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  btn: {
    color: theme.palette.common.white,
  },
  mTop8: {
    marginTop: theme.spacing(),
  },
}));

export const LanguageButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.mTop8}>
      <Button classes={{ label: classes.btn }}>English</Button>
      <Button classes={{ label: classes.btn }}>Spanish</Button>
    </div>
  );
};

LanguageButtons.displayName = 'LanguageButtons';
