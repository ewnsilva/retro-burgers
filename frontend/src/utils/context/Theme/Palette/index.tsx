import { createTheme, ThemeOptions } from '@mui/material/styles';

const synthwaveOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#fa558a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#feae5d',
      contrastText: '#e5e5e5',
    },
    info: {
      main: '#fff4e0',
      contrastText: 'black',
    },
    background: {
      default: '#2b134c',
    },
  },
  typography: {
    fontFamily: 'arial',
    h1: {
      color: '#e5e5e5',
    },
    h2: {
      color: '#e5e5e5',
    },
  },
};

const retrowaveOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#46E1FF',
      contrastText: '#1e6672',
    },
    secondary: {
      main: '#c73cf2',
      contrastText: '#ffffff',
    },
    info: {
      main: '#e5f9ff',
      contrastText: 'black',
    },
    background: {
      default: '#1e6672',
    },
  },
  typography: {
    fontFamily: 'arial',
    h1: {
      color: '#e5e5e5',
    },
    h2: {
      color: '#e5e5e5',
    },
  },
};

const darkwaveOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#d81594',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#39e5d7',
      contrastText: '#591a43',
    },
    info: {
      main: '#f2daea',
      contrastText: 'black',
    },
    background: {
      default: '#591a43',
    },
  },
  typography: {
    fontFamily: 'arial',
    h1: {
      color: '#e5e5e5',
    },
    h2: {
      color: '#e5e5e5',
    },
  },
};

export const synthwaveTheme = createTheme(synthwaveOptions);
export const darkwaveTheme = createTheme(darkwaveOptions);
export const retrowaveTheme = createTheme(retrowaveOptions);
