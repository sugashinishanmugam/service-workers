import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js',{ scope: '/docs' })
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

  return <Component {...pageProps} />
}

