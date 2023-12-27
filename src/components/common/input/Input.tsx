import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Theme, css } from '@emotion/react'

interface InputProps {
  id?: string
  className?: string
  placeholder: string
  maxLength?: number
  disabled?: boolean
  value?: string
  errorId?: string
  hasError?: boolean
  register?: UseFormRegisterReturn<string>
}

const Input = ({
  id,
  className,
  placeholder,
  maxLength,
  disabled,
  value,
  errorId,
  hasError = false,
  register,
}: InputProps) => {
  return (
    <input
      css={inputCss}
      id={id}
      className={className}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      value={value}
      aria-invalid={hasError}
      aria-errormessage={errorId}
      {...register}
    />
  )
}

export const inputCss = (theme: Theme) => css`
  ${theme.input.default};
`

export default Input
