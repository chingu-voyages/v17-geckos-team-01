import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E1E2E2',
      dark: '#9d9e9e',
    },
    secondary: {
      main: '#1D2228',
      dark: '#14171c',
    },
    warning: {
      main: '#FB8122',
      dark: '#af5a17',
    },
  },
});

const CustomThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
