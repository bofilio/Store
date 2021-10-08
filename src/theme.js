import { createTheme } from '@mui/material/styles';


export const base_theme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display4: {
      fontSize: "7rem",
      fontWeight: 300,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      letterSpacing: "-.04em",
      lineHeight: "1.14286em",
      marginLeft: "-.04em",
      color: "rgba(0, 0, 0, 0.54)"
    },
    display3: {
      fontSize: "3.5rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      letterSpacing: "-.02em",
      lineHeight: "1.30357em",
      marginLeft: "-.02em",
      color: "rgba(0, 0, 0, 0.54)"
    },
    display2: {
      fontSize: "2.8125rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      lineHeight: "1.06667em",
      marginLeft: "-.02em",
      color: "rgba(0, 0, 0, 0.54)"
    },
    display1: {
      fontSize: "2.125rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      lineHeight: "1.20588em",
      color: "rgba(0, 0, 0, 0.54)"
    },
    headline: {
      fontSize: "1.5rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      lineHeight: "1.35417em",
      color: "rgba(0, 0, 0, 0.87)"
    },
    title: {
      fontSize: "1.3125rem",
      fontWeight: 500,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      lineHeight: "1.16667em",
      color: "rgba(0, 0, 0, 0.87)"
    },
    subheading: {
      fontSize: "1rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      lineHeight: "1.5em",
      color: "rgba(0, 0, 0, 0.87)"
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      lineHeight: "1.71429em",
      color: "rgba(0, 0, 0, 0.87)"
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      lineHeight: "1.46429em",
      color: "rgba(0, 0, 0, 0.87)"
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      lineHeight: "1.375em",
      color: "rgba(0, 0, 0, 0.54)"
    },
    button: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      color: "rgba(0, 0, 0, 0.87)"
    }
  },
});
export const light_theme = createTheme(base_theme, {
  palette: {
    type: 'light',
    primary: {
      main: '#264653',
    },
    secondary: {
      main: '#f4f1de',
    },
    error: {
      main: '#e76f51',
    },
    warning: {
      main: '#f4a261',
    },
    success: {
      main: '#2a9d8f',
    },
    info: {
      main: '#a8dadc',
    },
    background: {
      default: '#fafafa',
      paper:'#fff'
    },
    text:{
      primary:"#264653"
    }
  },
  

});

export const dark_theme = createTheme(base_theme, {
  palette:{
    type: 'dark',
    primary: {
      main: '#1A313A',
    },
    secondary: {
      main: '#AAA89B',
    },
    error: {
      main: '#A14D38',
    },
    warning: {
      main: '#AA7143',
    },
    success: {
      main: '#1D6D64',
    },
    info: {
      main: '#75989A',
    },
    background: {
      default: '#2b2b2b',
    },
    text:{
      primary:"#fafafa"
    }

  },

});
