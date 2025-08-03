import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material/styles';
import { synthwaveTheme, retrowaveTheme, darkwaveTheme } from './Palette';

type ThemeType = 'synthwave' | 'retrowave' | 'darkwave';

interface ThemeColors {
  primary: string;
  secondary: string;
}

interface ThemeContextType {
  themeType: ThemeType;
  theme: Theme;
  setThemeType: (type: ThemeType) => void;
  currentColors: ThemeColors;
  allThemeColors: Record<ThemeType, ThemeColors>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
};

const themeMap: Record<ThemeType, Theme> = {
  synthwave: synthwaveTheme,
  retrowave: retrowaveTheme,
  darkwave: darkwaveTheme,
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeType, setThemeType] = useState<ThemeType>('synthwave');

  const theme = useMemo(() => themeMap[themeType], [themeType]);

  const allThemeColors = useMemo<Record<ThemeType, ThemeColors>>(() => {
    return {
      synthwave: {
        primary: synthwaveTheme.palette.primary.main,
        secondary: synthwaveTheme.palette.secondary.main,
      },
      retrowave: {
        primary: retrowaveTheme.palette.primary.main,
        secondary: retrowaveTheme.palette.secondary.main,
      },
      darkwave: {
        primary: darkwaveTheme.palette.primary.main,
        secondary: darkwaveTheme.palette.secondary.main,
      },
    };
  }, []);

  const currentColors = allThemeColors[themeType];

  const value = useMemo<ThemeContextType>(
    () => ({
      themeType,
      theme,
      setThemeType,
      currentColors,
      allThemeColors,
    }),
    [themeType, theme, setThemeType, currentColors, allThemeColors]
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
