import React from 'react';
import { Route, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider } from '@material-ui/core/styles';

import { Header, theme } from '../src';

const LogoComponent = () => (
  <Link to="/">
    <img
      alt="logo"
      height="35"
      width="275"
      src="https://www.blackbox-vision.tech/static/header-logo.light-eede249bf23b22e5de4b5a52ea223489.png"
    />
  </Link>
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
        </Header>
        <br />
        I'm in the "Home" page
      </Route>
      <Route exact path="/about">
        <Header>
          <LogoComponent />
        </Header>
        <br />
        I'm in the "About" page
      </Route>
    </ThemeProvider>
  ));
