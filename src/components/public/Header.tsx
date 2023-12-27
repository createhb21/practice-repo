import { NAV_MENU_LIST } from '@/constants/header'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const { pathname } = useRouter()

  return (
    <HeaderStyled>
      <Container>
        <Gnb>
          <MenuList>
            {NAV_MENU_LIST.header.map(({ label, href }) => (
              <NavItem key={label}>
                <Link href={href}>
                  <span aria-current={pathname === href && 'page'}>{label}</span>
                </Link>
              </NavItem>
            ))}
          </MenuList>
        </Gnb>
      </Container>
    </HeaderStyled>
  )
}

export const HeaderStyled = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: ${theme.color.white};
    height: ${theme.size.header.height_m};
    border-bottom: 1px solid ${theme.color.gray_20};
    background-color: ${theme.color.white};
    z-index: ${theme.zIndex.HEADER};

    @media ${theme.breakPoint.device.desktop} {
      height: ${theme.size.header.height_d};
    }
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.size.container};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media ${theme.breakPoint.device.tablet} {
      margin: 0 auto;
    }
  `}
`

const Gnb = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

const MenuList = styled.ul`
  display: flex;
  height: 100%;
`

const NavItem = styled.li`
  ${({ theme }) => css`
    & > a > span {
      ${theme.font.medium_15};
      display: flex;
      align-items: center;
      height: 100%;
      padding: 10px 20px;
      color: ${theme.color.gray_50};
      transition: 0.3s;

      &[aria-current='page'] {
        ${theme.font.bold_15};
        color: ${theme.color.black};
      }

      @media (hover: hover) {
        &:not([aria-current='page']):hover {
          color: ${theme.color.black};
        }
      }
    }
  `}
`

export default Header
