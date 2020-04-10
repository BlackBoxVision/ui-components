import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    name: 'UI components',
    theme: themes.light,
    showAddonPanel: false,
    addonPanelInRight: true,
  },
});
