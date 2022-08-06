import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { ReactNode } from 'react'

import colorPalette, { ColorPalette } from './colorPalette'
import { BoxShadows, RoundCorners, boxShadows, roundCorners } from './effects'
import { defaultFontFamily, fontSource } from './fonts'

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

        @font-face {
          font-family: '${defaultFontFamily}';
          src: url(${fontSource.REGULAR}), url(${fontSource.BOLD}), url(${fontSource.ITALIC}), url(${fontSource.LIGHT}), url(${fontSource.MEDIUM});
          font-display: swap;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
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

export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
