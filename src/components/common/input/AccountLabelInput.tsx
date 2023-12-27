import { useState, createContext, useContext, ReactNode } from 'react'

import { EyeAbledIcon, EyeDisabledIcon } from '@/assets/icon'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { UseFormRegisterReturn } from 'react-hook-form'
import { ErrorMsg } from '..'

interface LabelInputContextType {
  id: string
  hasError: boolean
}

interface AccountLabelInputProps {
  className?: string
  children: ReactNode
  id: string
  label: string
  value: string | undefined
  hasError?: boolean
  errorMsg?: string
}

interface InputProps {
  className?: string
  register: UseFormRegisterReturn<string>
  maxLength?: number
  disabled?: boolean
}

interface PasswordProps {
  register: UseFormRegisterReturn<string>
  disabled?: boolean
}

const LabelInputContext = createContext<LabelInputContextType>({
  id: '',
  hasError: false,
})

const AccountLabelInput = ({
  className,
  children,
  id,
  label,
  hasError = false,
  errorMsg = '',
}: AccountLabelInputProps) => {
  return (
    <LabelInputContext.Provider value={{ id, hasError }}>
      <LabelInputWrapper className={className}>
        <Label htmlFor={id} aria-invalid={hasError}>
          {label}
        </Label>
        {children}
        <ErrorMsg css={errorMsgCss} message={errorMsg} />
      </LabelInputWrapper>
    </LabelInputContext.Provider>
  )
}

AccountLabelInput.Input = function Input({ className, disabled, maxLength = 100, register }: InputProps) {
  const { id, hasError } = useContext(LabelInputContext)

  return (
    <InputStyled
      className={className}
      disabled={disabled}
      id={id}
      maxLength={maxLength}
      aria-invalid={hasError}
      {...register}
    />
  )
}

AccountLabelInput.Password = function Password({ disabled, register }: PasswordProps) {
  const { id, hasError } = useContext(LabelInputContext)
  const [isShow, setIsShow] = useState(false)

  const handleClick = () => {
    setIsShow(!isShow)
  }

  return (
    <>
      <InputStyled
        css={password}
        disabled={disabled}
        id={id}
        maxLength={100}
        type={!isShow ? 'password' : 'text'}
        aria-invalid={hasError}
        {...register}
      />
      <PasswordShowBtn type="button" onClick={handleClick}>
        {isShow ? <EyeAbledIcon /> : <EyeDisabledIcon />}
      </PasswordShowBtn>
    </>
  )
}

const LabelInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 53px;
`

const Label = styled.label`
  ${({ theme }) => css`
    ${theme.font.regular_12};
    position: absolute;
    top: 0;
    color: ${theme.color.gray_50};
    transition-duration: 0.3s;

    &[aria-invalid='true'] {
      color: ${theme.color.red_20};
    }
  `}
`

const InputStyled = styled.input`
  ${({ theme }) => css`
    ${theme.font.regular_15};
    height: 37px;
    outline: 0;
    border: 0;
    border-bottom: 1px solid ${theme.color.gray_30};
    background-color: inherit;

    :focus {
      border: 0;
      border-bottom: 1px solid ${theme.color.blue_10};
    }

    &[aria-invalid='true'] {
      border-color: ${theme.color.red_20};
    }
  `}
`

const password = css`
  padding-right: calc(24px + 16px);
`

const PasswordShowBtn = styled.button`
  position: absolute;
  bottom: 8px;
  right: 0px;
  width: 24px;
  height: 24px;
`

const errorMsgCss = css`
  position: absolute;
  left: 0;
  bottom: -24px;
`

export default AccountLabelInput
