import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';

import { SectionCard, theme } from '../src';

storiesOf('SectionCard', module).add('Demo', () => (
  <ThemeProvider theme={theme}>
    <SectionCard
      title="We discover"
      image="https://www.blackbox-vision.tech/static/needs-e78b2aa36c17de9132482ac752cbfac8.svg"
      description="Our focus is understand business and stakeholders needs, analyzing, defining and validating every requirement in order to know “what” is needed."
    />
  </ThemeProvider>
));
