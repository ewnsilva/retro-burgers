import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#FA558A",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#feae5d",
      contrastText: "#e5e5e5",
    },
    info: {
      main: "#fff4e0",
      contrastText: "black",
    },
    background: {
      default: "#250f40",
    },
  },
  typography: {
    fontFamily: "arial",
    h1: {
      color: "#e5e5e5",
    },
    h2: {
      color: "#e5e5e5",
    },
  },
});
