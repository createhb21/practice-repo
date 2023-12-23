import { type ReactElement } from 'react'
import { AuthProvider } from '@/contexts'
import { globalStyles, theme } from '@/styles'
import { ThemeProvider, Global } from '@emotion/react'
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import { type NextComponentType } from 'next/types'

import '../styles/font.css'

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </ThemeProvider>
  )
}

export default App
