import React, { FunctionComponent } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';

import { useDarkModeToggle } from '../../contexts/DarkMode';

interface DarkModeToggleProps {
  label: string;
}

export const DarkModeToggle: FunctionComponent<DarkModeToggleProps> = ({
  label,
}: DarkModeToggleProps) => {
  const toggleDarkMode: any = useDarkModeToggle();

  return (
    <FormControlLabel
      control={<Switch onClick={toggleDarkMode} />}
      label={label}
    />
  );
};

DarkModeToggle.displayName = 'DarkModeToggle';

export default DarkModeToggle;
