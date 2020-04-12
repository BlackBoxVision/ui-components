import React, { FC } from 'react';
import { Link } from '@material-ui/core';

import { useStyles } from './styles';

export interface MenuItemProps {
  /**
   * The url of link
   */
  to: string;
  /**
   * The link label
   */
  label: string;
  /**
   * The Link component
   */
  component?: any;
  /**
   * The boolean value used to determine some internal link props
   */
  external?: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({
  to,
  label,
  component,
  external,
}: MenuItemProps) => {
  const classes = useStyles();

  const hrefProps = external ? { href: to } : { to };

  return (
    <Link
      {...hrefProps}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      component={component}
      className={classes.link}
      underline="none"
    >
      {label}
    </Link>
  );
};

MenuItem.defaultProps = {
  component: 'a',
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
