import React, { FunctionComponent } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';

import { useDarkMode } from '../../hooks/useDarkMode';

export const ThemeSwitch: FunctionComponent = () => {
  const [, toggleDarkMode] = useDarkMode();

  return (
    <FormControlLabel
      control={<Switch onClick={toggleDarkMode} />}
      label="Dark mode"
    />
  );
};

ThemeSwitch.displayName = 'ThemeSwitch';

export default ThemeSwitch;
