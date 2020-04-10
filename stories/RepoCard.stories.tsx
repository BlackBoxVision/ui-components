import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';

import { RepoCard, theme } from '../src';

const checkoutRepo = {
  url: 'https://github.com/BlackBoxVision/react-native-mercadopago-checkout',
  nameWithOwner: 'BlackBoxVision/react-native-mercadopago-checkout',
  description: '💸 React Native bridge for MercadoPago SDK version >= 3.2.0',
  primaryLanguage: { name: 'Java', color: '#B07219' },
  stargazers: { totalCount: 15 },
  forks: { totalCount: 9 },
};

const mvpRepo = {
  url: 'https://github.com/BlackBoxVision/mvp-helpers',
  description:
    '♻️Helper classes to build Android Apps through MVP pattern in a faster way',
  nameWithOwner: 'BlackBoxVision/mvp-helpers',
  primaryLanguage: { color: '#B07219', name: 'Java' },
  forks: { totalCount: 11 },
  stargazers: { totalCount: 43 },
};

storiesOf('RepoCard', module).add('Demo', () => (
  <ThemeProvider theme={theme}>
    <RepoCard repository={checkoutRepo} />
    <RepoCard repository={mvpRepo} />
  </ThemeProvider>
));
