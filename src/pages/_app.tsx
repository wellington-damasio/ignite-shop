import { globalStyles } from '@/styles/globals'
import { Container, Header } from '@/styles/pages/app';
import type { AppProps } from 'next/app'
import Image from 'next/image';
import Link from 'next/link';
import igniteLogo from '../assets/ignite-logo.svg'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href='/' ><Image src={igniteLogo} alt="" /></Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
