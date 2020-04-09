import { useState } from 'react';

import { theme as defaultTheme } from '../theme';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const {
    palette: { type },
  } = theme;

  const toggleDarkMode = () => {
    const updatedTheme: any = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      },
    };

    setTheme(updatedTheme);
  };

  return [theme, toggleDarkMode];
};
