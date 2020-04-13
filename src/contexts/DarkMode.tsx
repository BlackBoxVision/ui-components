import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  FC,
} from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import { lightTheme, darkTheme } from '../theme';

export interface DarkModeProviderProps {
  children: ReactNode;
}

const DarkModeContext = createContext<Function | null>(null);

export const DarkModeProvider: FC<DarkModeProviderProps> = ({
  children,
}: DarkModeProviderProps) => {
  const [dark, setDark] = useState(false);

  return (
    <DarkModeContext.Provider value={() => setDark(!dark)}>
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.displayName = 'DarkModeProvider';

export const useDarkModeToggle = () => {
  const ctx = useContext(DarkModeContext);

  if (ctx === null || ctx === undefined)
    throw new Error(
      `Maybe you forgot wrap your parent component with the 'DarkModeProvider'`
    );

  return ctx;
};
