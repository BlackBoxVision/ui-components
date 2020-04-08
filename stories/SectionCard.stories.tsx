import { storiesOf } from '@storybook/react';
import React from 'react';
import { SectionCard } from '../src';

storiesOf('SectionCard', module).add('Demo', () => (
  <SectionCard
    title="We discover"
    image="https://www.blackbox-vision.tech/static/needs-e78b2aa36c17de9132482ac752cbfac8.svg"
    description="Our focus is understand business and stakeholders needs, analyzing, defining and validating every requirement in order to know “what” is needed."
  />
));
