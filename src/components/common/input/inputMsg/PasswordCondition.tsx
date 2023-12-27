import React from 'react'
import { CheckIcon } from '@/assets/icon'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface PasswordConditionProps {
  children: React.ReactNode
  className?: string
  status: boolean | 'not-yet'
  hasErr?: boolean
}

const PasswordCondition = ({ children, className, status, hasErr }: PasswordConditionProps) => {
  return (
    <Wrapper className={className} data-status={status} data-iserr={hasErr}>
      <CheckIcon />
      <span>{children}</span>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;

  ${({ theme }) => css`
    & > svg {
      fill: ${theme.color.gray_40};
    }
    & > span {
      ${theme.font.regular_13};
      color: ${theme.color.gray_60};
    }
    &[data-status='true'] {
      background-color: read-only;
      & > svg {
        fill: ${theme.color.green_20};
      }
      & > span {
        color: ${theme.color.green_20};
      }
    }
    &[data-status='false'] {
      & > svg {
        fill: ${theme.color.red_20};
      }
      & > span {
        color: ${theme.color.red_20};
      }
    }

    &[data-iserr='true'] {
      & > svg {
        fill: ${theme.color.red_20};
      }
      & > span {
        color: ${theme.color.red_20};
      }
    }
  `}
`

export default PasswordCondition
