import React, { memo } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { UseFormRegisterReturn } from 'react-hook-form'

interface TextareaProps {
  className?: string
  placeholder?: string
  maxLength: number
  textValue?: string
  errorId?: string
  hasError?: boolean
  register: UseFormRegisterReturn<string>
}

const Textarea = ({
  className,
  maxLength,
  placeholder,
  textValue,
  errorId,
  hasError = false,
  register,
}: TextareaProps) => {
  return (
    <TextareaWrapper className={className}>
      <TextareaStyled
        rows={3}
        maxLength={maxLength}
        placeholder={placeholder}
        aria-invalid={hasError}
        aria-errormessage={errorId}
        {...register}
      />
      <Length>{`${textValue?.length ?? 0}/${maxLength}`}</Length>
    </TextareaWrapper>
  )
}

const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
`

const TextareaStyled = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border: 0;
    resize: none;

    &[aria-invalid='true'] {
      border: 1px solid ${theme.color.red_20};
    }
  `}
`

const Length = styled.span`
  ${({ theme }) => css`
    position: absolute;
    bottom: 13px;
    left: 20px;
    color: ${theme.color.gray_50};
  `}
`

export default memo(Textarea)
