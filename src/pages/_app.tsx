import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import AppLayout from '@/ui/app-layout'
import { ThemeProvider } from '@/ui/theme-provider'
import '@/ui/theme-provider/assets.css'
import { Provider } from 'react-redux'
import store from '@/data/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
      </Head>
      <Provider store={store}>
        <AppLayout>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </AppLayout>
      </Provider>
    </>
  )
}

export default MyApp
