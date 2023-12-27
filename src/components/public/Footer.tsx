import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Footer = () => {
  return (
    <FooterStyled>
      <Container />
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    height: ${theme.size.footer.height_m};
    padding: 28px 0;
    background-color: ${theme.color.white};

    @media ${theme.breakPoint.device.tablet} {
      height: ${theme.size.footer.height_t};
    }

    @media ${theme.breakPoint.device.desktop} {
      height: ${theme.size.footer.height_d};
    }
  `}
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

export default Footer
