import { forwardRef, type Ref } from 'react'
import { noneUserSelect } from '@/styles/common'
import { css, type Theme, useTheme } from '@emotion/react'

import { type ButtonAttributes } from './type'

type Color = 'navy' | 'blue' | 'gray'

interface Props extends ButtonAttributes {
  /**
   * @description 'navy' | 'blue' | 'gray' 중 색상을 지정할 수 있습니다.
   * @default 'navy'
   */
  color?: Color
}

const Button = forwardRef(function Button(
  { children, type = 'button', color = 'navy', ...rest }: Props,
  forwardedRef: Ref<HTMLButtonElement>
) {
  const theme = useTheme()

  return (
    // eslint-disable-next-line react/button-has-type
    <button css={buttonCss(theme, color)} ref={forwardedRef} type={type} {...rest}>
      {children}
    </button>
  )
})

const buttonCss = (theme: Theme, color: Color) => css`
  all: unset;

  ${color === 'navy' && navyCss(theme)}
  ${color === 'blue' && blueCss(theme)}
  ${color === 'gray' && grayCss(theme)}
  
  ${noneUserSelect}

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding: 14px 24px;

  border-radius: 8px;

  transition: color 0.3s cubic-bezier(0.6, -0.05, 0.01, 0.99),
    background-color 0.3s cubic-bezier(0.6, -0.05, 0.01, 0.99);
`

const navyCss = (theme: Theme) => css`
  color: ${theme.color.white};
  background-color: ${theme.color.navy_20};

  &:hover {
    background-color: ${theme.color.navy_30};
  }

  &:disabled {
    background-color: ${theme.color.navy_10};
  }
`

const blueCss = (theme: Theme) => css`
  color: ${theme.color.white};
  background-color: ${theme.color.blue_10};

  &:hover {
    background-color: ${theme.color.blue_10_10};
  }

  &:disabled {
    background-color: ${theme.color.red_10};
  }
`

const grayCss = (theme: Theme) => css`
  color: ${theme.color.gray_30};
  background-color: ${theme.color.gray_60};

  &:hover {
    background-color: ${theme.color.gray_40};
  }

  &:disabled {
    color: ${theme.color.gray_10};
    background-color: ${theme.color.gray_80};
  }
`

export default Button
