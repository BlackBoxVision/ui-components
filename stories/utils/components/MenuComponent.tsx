import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

interface MenuItem {
  slug: string;
  label: string;
  target?: string;
  rel?: string;
}

export const MenuMobile = ({ menu }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <Hidden only={['md', 'lg', 'xl']} implementation="css">
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon color="secondary" />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={() => setOpen(false)}
      >
        <List>
          {menu.map(
            ({ slug, label, target = '_self', rel }: MenuItem, idx: string) => (
              <ListItem
                key={`menu_${idx}`}
                to={slug}
                target={target}
                rel={rel}
                component={Link}
                onClick={() => setOpen(false)}
                button
              >
                <ListItemText primary={label} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Hidden>
  );
};

export const MenuComponent = ({ menu }: any) => (
  <>
    <Hidden only={['xs', 'sm']} implementation="css">
      <nav>
        {menu &&
          menu.map(
            ({ slug, label, target = '_self', rel }: MenuItem, idx: string) => (
              <Button
                key={`menu_${idx}`}
                to={slug}
                target={target}
                rel={rel}
                component={Link}
              >
                {label}
              </Button>
            )
          )}
      </nav>
    </Hidden>
    <MenuMobile menu={menu} />
  </>
);
