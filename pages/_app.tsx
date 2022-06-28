import '../styles/globals.css'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import { ThemeProvider } from '../store/theme'; 
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    goatcounter?: any;
  }
}



function MyApp({ Component, pageProps }: AppProps) {


  const router = useRouter();


  useEffect(function sendGoatCounterEventsOnRoute() {

    if(window.goatcounter){
      const handleRouteChange = (path:any) => {
        window?.goatcounter?.count?.({
          path,
        })
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }

  }, [router.events])

  return (
    <ThemeProvider>

    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>

    <script 
      async
      src="//gc.zgo.at/count.js"
      data-goatcounter-settings='{"no_onload": true}'
      data-goatcounter="https://ollie-taylor.goatcounter.com/count"
    ></script>

    </ThemeProvider>

  )
}

export default MyApp
