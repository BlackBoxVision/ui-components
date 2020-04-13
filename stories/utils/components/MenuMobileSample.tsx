import React, { useState } from 'react';
import { IconButton, Hidden } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import { menuItems } from '../items';
import { MenuMobile } from '../../../src';
export const MenuMobileSample = ({ initialOpen = false }: any) => {
  const [open, setOpen] = useState(initialOpen);

  return (
    <>
      <Hidden only={['xs', 'sm', 'md']}>
        <IconButton onClick={() => setOpen(!open)}>
          <MenuRoundedIcon color="secondary" />
        </IconButton>
      </Hidden>
      <MenuMobile
        open={open}
        toggleMenu={() => setOpen(!open)}
        menu={menuItems}
      />
    </>
  );
};
