import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Hidden } from '@material-ui/core';

import { MenuMobileSample } from './MenuMobileSample';

export const MenuComponent = ({ menu }: any) => (
  <>
    <Hidden only={['xs', 'sm']} implementation="css">
      <nav>
        {menu &&
          menu.map(
            ({ slug, label, target = '_self', rel }: any, idx: string) => (
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
    <MenuMobileSample />
  </>
);
