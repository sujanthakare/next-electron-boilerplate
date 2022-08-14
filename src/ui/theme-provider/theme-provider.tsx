import { ReactNode } from 'react'

import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material'

// import './assets.css';
import colorPalette, { ColorPalette } from './colorPalette'
import { BoxShadows, RoundCorners, boxShadows, roundCorners } from './effects'

export const defaultFontFamily = "'DM Sans', sans-serif"

export const fontWeight = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  BOLD: 700,
  EXTRABOLD: 900,
}

export const lineHeight = {
  SMALL: 1.3,
  MEDIUM: 1.4,
  LARGE: 1.6,
}

export interface ITheme {
  colors: ColorPalette
  boxShadows: BoxShadows
  roundCorners: RoundCorners
}

export const defaultTheme: ITheme = {
  colors: colorPalette,
  boxShadows,
  roundCorners,
}

const theme = createTheme({
  typography: {
    fontFamily: defaultFontFamily,
    button: {
      fontWeight: 600,
      letterSpacing: 1,
    },
    fontSize: 14,
  },

  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          height: '1.1em',
          width: '1em',
          ':before': {
            lineHeight: '1.1em',
          },
        },
      },
      defaultProps: {
        baseClassName: 'fi',
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        * {
          margin: 0;
          padding: 0;
          border: 0;
          vertical-align: baseline;
          text-decoration: none;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 36,
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0078d4',
      dark: '#005a9e',
    },
    secondary: {
      main: '#f50057',
    },
  },
  shape: {
    borderRadius: 0,
  },
})

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
