import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import StoryRouter from 'storybook-react-router';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
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

import { Header, theme } from '../src';

interface MenuItem {
  slug: string;
  label: string;
  target?: string;
  rel?: string;
}

const menuItems = [
  {
    slug: '/#why',
    label: 'Why',
  },
  {
    slug: '/#what',
    label: 'What',
  },
  {
    slug: '/#how',
    label: 'How',
  },
  {
    slug: '/#success',
    label: 'Success',
  },
  {
    slug: '/#contact',
    label: 'Contact',
  },
];

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 35,
    paddingTop: 5,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    width: 275,
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    paddingTop: 5,
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    width: 220,
  },
}));

const LogoComponent = () => {
  const classes = useStyles();
  return (
    <Link to="/">
      <img
        alt="logo"
        className={classes.logo}
        src="https://www.blackbox-vision.tech/static/header-logo.light-eede249bf23b22e5de4b5a52ea223489.png"
      />
    </Link>
  );
};

const MenuMobile = ({ menu }: any) => {
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

const MenuComponent = ({ menu }: any) => (
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

storiesOf('Header', module)
  .addDecorator(
    StoryRouter(
      {
        '/': linkTo('Header', 'home'),
      },
      { initialEntries: ['/about'] }
    )
  )
  .add('Demo', () => (
    <ThemeProvider theme={theme}>
      <Route exact path="/">
        <Header>
          <LogoComponent />
          <MenuComponent menu={menuItems} />
        </Header>
        <br />
        I'm in the "Home" page
      </Route>
      <Route exact path="/about">
        <Header>
          <LogoComponent />
          <MenuComponent menu={menuItems} />
        </Header>
        <br />
        I'm in the "About" page
      </Route>
    </ThemeProvider>
  ));
