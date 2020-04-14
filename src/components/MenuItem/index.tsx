import React, { FC } from 'react';
import { Link, ListItem, ListItemText } from '@material-ui/core';

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
  /**
   * The boolean value used to determine some internal link props
   */
  anchor?: boolean;
  /**
   * The boolean value used to determine desktop or mobile styles
   */
  mobile?: boolean;
  /**
   * Callback used to close the drawer on mobile
   */
  onClose?: any;
}

export const MenuItem: FC<MenuItemProps> = ({
  to,
  label,
  anchor,
  component,
  external,
  mobile,
  onClose,
}: MenuItemProps) => {
  const classes = useStyles();

  let hrefProps: any = {
    target: '_self',
  };

  if (anchor || external) {
    hrefProps.href = to;

    if (external) {
      hrefProps.target = '_blank';
      hrefProps.rel = 'noopener noreferrer';
    }
  } else {
    hrefProps.to = to;
  }

  return mobile ? (
    <ListItem {...hrefProps} component={component} onClick={onClose} button>
      <ListItemText primary={label} />
    </ListItem>
  ) : (
    <Link
      {...hrefProps}
      component={component}
      className={!mobile && classes.link}
      underline="none"
    >
      {label}
    </Link>
  );
};

MenuItem.defaultProps = {
  component: 'a',
  mobile: false,
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
