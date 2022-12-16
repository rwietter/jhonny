import '../styles/global.css'
import '../styles/main.css'
import '../styles/navigation.css'
import '../styles/phones.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
