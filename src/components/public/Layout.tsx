import { PropsWithChildren } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Layout = ({ children }: PropsWithChildren) => {
  return <LayoutMain>{children}</LayoutMain>
}

const LayoutMain = styled.main`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 100%;
    background-color: ${theme.color.white};
  `}
`
