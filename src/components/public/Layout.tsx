import { PropsWithChildren } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Footer from './Footer'
import Header from './Header'

interface LayoutMainProps {
  header?: boolean
  footer?: boolean
}

export const Layout = ({ header, footer, children }: PropsWithChildren<LayoutMainProps>) => {
  return (
    <>
      {header && <Header />}
      <Main header={header} footer={footer}>
        {children}
      </Main>
      {footer && <Footer />}
    </>
  )
}

const Main = styled.main<LayoutMainProps>`
  ${({ theme, header, footer }) => css`
    position: relative;
    width: 100vw;
    min-width: max-content;
    min-height: ${footer && header
      ? `calc(100vh - ${theme.size.header.height_m} - ${theme.size.footer.height_m})`
      : header
      ? `calc(100vh - ${theme.size.header.height_m})`
      : footer
      ? `calc(100vh - ${theme.size.footer.height_m})`
      : '100vh'};
    padding-top: ${header ? theme.size.header.height_m : '0'};
    background-color: ${theme.color.white};

    @media ${theme.breakPoint.device.tablet} {
      min-height: ${footer && header
        ? `calc(100vh - ${theme.size.header.height_m} - ${theme.size.footer.height_t})`
        : header
        ? `calc(100vh - ${theme.size.header.height_m})`
        : footer
        ? `calc(100vh - ${theme.size.footer.height_t})`
        : '100vh'};
    }

    @media ${theme.breakPoint.device.desktop} {
      min-height: ${footer && header
        ? `calc(100vh - ${theme.size.header.height_d} - ${theme.size.footer.height_d})`
        : header
        ? `calc(100vh - ${theme.size.header.height_d})`
        : footer
        ? `calc(100vh - ${theme.size.footer.height_d})`
        : '100vh'};
      padding-top: ${header ? theme.size.header.height_d : '0'};
    }
  `}
`
