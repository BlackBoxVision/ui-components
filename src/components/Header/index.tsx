import React, { FunctionComponent } from 'react';
import Headroom from 'react-headroom';
import { AppBar, Toolbar } from '@material-ui/core';
import { useStyles } from './styles';

export interface HeaderProps {
  children: any;
}

export const Header: FunctionComponent<HeaderProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <Headroom>
      <AppBar position="static" classes={{ root: classes.root }}>
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Headroom>
  );
};

Header.displayName = 'Header';

export default Header;
