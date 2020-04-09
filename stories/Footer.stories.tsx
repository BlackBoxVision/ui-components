import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { Footer, theme } from '../src';

const useStyles = makeStyles((theme) => ({
  btn: {
    color: theme.palette.text.primary,
  },
  mTop8: {
    marginTop: theme.spacing(),
  },
}));

const LanguageButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.mTop8}>
      <Button classes={{ label: classes.btn }}>English</Button>
      <Button classes={{ label: classes.btn }}>Spanish</Button>
    </div>
  );
};

storiesOf('Footer', module).add('Demo', () => (
  <ThemeProvider theme={theme}>
    <Footer
      copyright={`BlackBox Vision @ ${new Date().getFullYear()} - All Rights Reserved`}
      LanguageButtons={<LanguageButtons />}
    />
  </ThemeProvider>
));
