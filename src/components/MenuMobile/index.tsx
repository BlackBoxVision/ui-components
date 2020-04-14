import React, { FC } from 'react';
import { Drawer, Hidden, IconButton, List } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import MenuItem from '../MenuItem';
import { useStyles } from './styles';

interface MenuItem {
  /**
   * The path of menu item link
   */
  to: string;
  /**
   * The label to display on link
   */
  label: string;
  /**
   * The component used by the link
   */
  component?: any;
  /**
   * A boolean to mark a link like external
   */
  external?: boolean;
  /**
   * A boolean to mark a link like anchor
   */
  anchor?: boolean;
}

export interface MenuMobileProps {
  /**
   * A boolean flag used to open/close the menu
   */
  open: boolean;
  /**
   * Function to toggle the open flag
   */
  toggleMenu: any;
  /**
   * The menu list items
   */
  menu: any;
}

export const MenuMobile: FC<MenuMobileProps> = ({
  open,
  toggleMenu,
  menu,
}: MenuMobileProps) => {
  const classes = useStyles();

  return (
    <Hidden only={['md', 'lg', 'xl']} implementation="css">
      <IconButton onClick={toggleMenu}>
        <MenuRoundedIcon color="secondary" />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={toggleMenu}
      >
        <List className={classes.list}>
          {menu.map((props: MenuItem, idx: string) => (
            <MenuItem key={`menu_${idx}`} {...props} mobile />
          ))}
        </List>
      </Drawer>
    </Hidden>
  );
};

MenuMobile.displayName = 'MenuMobile';

export default MenuMobile;
