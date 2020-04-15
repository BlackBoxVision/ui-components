import React, {
  FC,
  ReactNode,
  useState,
  useLayoutEffect,
  useCallback,
} from 'react';
import Headroom from 'react-headroom';
import { AppBar, Toolbar } from '@material-ui/core';

import { useStyles } from './styles';

export interface HeaderProps {
  /**
   * React children components
   */
  children?: ReactNode;
  /**
   * Header's height
   */
  height?: number;
  /**
   * A number used to set the header box shadow intensity
   */
  elevation?: number;
  /**
   * Background color applied on scroll
   */
  background?: string;
  /**
   * If true, disables the toolbar gutter padding
   */
  disableGutters?: boolean;
}

export const Header: FC<HeaderProps> = ({
  children,
  elevation,
  height,
  background,
  disableGutters,
}: HeaderProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const classes = useStyles({ collapsed, height, background });

  const handleScroll = useCallback(() => {
    if (window.scrollY > 64) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Headroom>
      <AppBar position="fixed" elevation={elevation} className={classes.appBar}>
        <Toolbar className={classes.toolbar} disableGutters={disableGutters}>
          {children}
        </Toolbar>
      </AppBar>
    </Headroom>
  );
};

Header.defaultProps = {
  elevation: 0,
  height: 64,
  disableGutters: false,
};

Header.displayName = 'Header';

export default Header;
