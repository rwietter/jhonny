import '../styles/main.css'
import '../styles/modal.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export function reportWebVitals(metric: any) {
  switch (metric.name) {
    case 'FCP':
      // handle FCP results
      break
    case 'LCP':
      console.log('LCP', metric)
      break
    case 'CLS':
      // handle CLS results
      break
    case 'FID':
      // handle FID results
      break
    case 'TTFB':
      // handle TTFB results
      break
    case 'INP':
      // handle INP results (note: INP is still an experimental metric)
      break
    default:
      break
  }
}