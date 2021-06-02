import React from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { Header } from 'components/features/Header'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
