// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/globals'
import { DefaultLayout } from '@/layouts/DefaultLayout'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>{`
        :root {
          --font-jakarta: ${jakarta.style.fontFamily};
        }
      `}</style>

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}
