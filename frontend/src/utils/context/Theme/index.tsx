import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import { synthwaveTheme, retrowaveTheme, darkwaveTheme } from './Palette';

type ThemeType = 'synthwave' | 'retrowave' | 'darkwave';

interface ThemeContextType {
  themeType: ThemeType;
  theme: Theme;
  primaryColor: string;
  secondaryColor: string;
  setThemeType: (type: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext deve ser usado dentro de ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeType, setThemeType] = useState<ThemeType>('synthwave');

  const theme = useMemo(() => {
    switch (themeType) {
      case 'retrowave':
        return retrowaveTheme;
      case 'darkwave':
        return darkwaveTheme;
      case 'synthwave':
      default:
        return synthwaveTheme;
    }
  }, [themeType]);

  const contextValue = useMemo<ThemeContextType>(() => {
    return {
      themeType,
      theme,
      primaryColor: theme.palette.primary.main,
      secondaryColor: theme.palette.secondary.main,
      setThemeType,
    };
  }, [themeType, theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
