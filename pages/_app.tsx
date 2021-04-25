import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/styles.css';

import type { AppProps /*, AppContext */ } from 'next/app'

import React from 'react'

function HomeApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default HomeApp