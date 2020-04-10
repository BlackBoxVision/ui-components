import { useState, useMemo, useCallback } from 'react';

import { defaultTheme } from '../theme';
import { createMuiTheme, Theme } from '@material-ui/core';

export const useDarkMode = (): [Theme, () => void] => {
  const [light, setLight] = useState(defaultTheme?.palette?.type === 'light');

  const toggleDarkMode = useCallback(() => setLight(!light), [light]);

  const theme = useMemo(
    () =>
      createMuiTheme({
        ...defaultTheme,
        palette: {
          ...defaultTheme?.palette,
          type: light ? 'light' : 'dark',
        },
      }),
    [light]
  );

  return [theme, toggleDarkMode];
};
