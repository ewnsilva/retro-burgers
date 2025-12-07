import { createTheme, ThemeOptions } from '@mui/material/styles';

const synthwaveOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#fa558a',
      contrastText: '#e5e5e5',
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
      default: '#220c3f',
    },
    text: {
      primary: '#e5e5e5',
      secondary: '#220c3f',
    },
  },
  typography: {
    fontFamily: 'arial',
  },
};

const retrowaveOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#c73cf2',
      contrastText: '#e5e5e5',
    },
    secondary: {
      main: '#46E1FF',
      contrastText: '#ffffff',
    },
    info: {
      main: '#e5f9ff',
      contrastText: 'black',
    },
    background: {
      default: '#0c373f',
    },
    text: {
      primary: '#e5e5e5',
      secondary: '#0c373f',
    },
  },
  typography: {
    fontFamily: 'arial',
  },
};

const darkwaveOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#e5007e',
      contrastText: '#e5e5e5',
    },
    secondary: {
      main: '#00e2c8',
      contrastText: '#591a43',
    },
    info: {
      main: '#e5e5e5',
      contrastText: 'black',
    },
    background: {
      default: '#3f0c2d',
    },
    text: {
      primary: '#e5e5e5',
      secondary: '#3f0c2d',
    },
  },
  typography: {
    fontFamily: 'arial',
  },
};

export const synthwaveTheme = createTheme(synthwaveOptions);
export const darkwaveTheme = createTheme(darkwaveOptions);
export const retrowaveTheme = createTheme(retrowaveOptions);
