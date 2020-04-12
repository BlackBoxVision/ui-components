import React, { FC } from 'react';
import { Drawer, Hidden, IconButton, List } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import MenuItem from '../MenuItem';
import { useStyles } from './styles';

interface MenuItem {
  slug: string;
  label: string;
  component?: any;
  external?: boolean;
}

export interface MenuMobileProps {
  open: boolean;
  toggleMenu: any;
  menu: any;
}

export const MenuMobile: FC<MenuMobileProps> = ({
  open,
  toggleMenu,
  menu,
}: MenuMobileProps) => {
  const classes = useStyles();

  return (
    <>
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
            {menu.map(
              ({ slug, label, component, external }: MenuItem, idx: string) => (
                <MenuItem
                  key={`menu_${idx}`}
                  to={slug}
                  label={label}
                  component={component}
                  external={external}
                  onClose={toggleMenu}
                  mobile
                />
              )
            )}
          </List>
        </Drawer>
      </Hidden>
    </>
  );
};

MenuMobile.displayName = 'MenuMobile';

export default MenuMobile;
