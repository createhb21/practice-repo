import { type ReactElement } from 'react'
import { RecoilRoot } from 'recoil'
import Toast from '@/components/common/toast/Toast'
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
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
        <Toast />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
