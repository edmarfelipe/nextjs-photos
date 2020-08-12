import React from 'react'
import Head from 'next/head'
import { GlobalStyle } from '@styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Amazing Photos</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
