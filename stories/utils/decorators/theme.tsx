import React from 'react';
import { ThemeProvider, Theme } from '@material-ui/core';

export const addThemeProvider = (theme: Theme) => (storyFn: Function) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
