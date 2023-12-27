import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ErrorMsgProps {
  id?: string
  className?: string
  message?: string
}

const ErrorMsg = ({ id, className, message }: ErrorMsgProps) => {
  if (!message) {
    return null
  }

  return (
    <ErrorMsgStyled id={id} className={className} role="alert">
      {message}
    </ErrorMsgStyled>
  )
}

export const ErrorMsgStyled = styled.p`
  ${({ theme }) => css`
    ${theme.font.regular_13};
    color: ${theme.color.red_20};
  `}
`

export default ErrorMsg
