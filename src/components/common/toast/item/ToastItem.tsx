import React, { useState, useEffect } from 'react'
import { SuccessIcon, WarningIcon } from '@/assets/icon'

import { TOAST_DURATION, TRANSITION_DURATION } from '@/constants/common'
import useToast from '@/hooks/useToast'
import type { Toast } from '@/types'
import * as S from './ToastItem.styled'

interface ToastItemProps extends Toast {
  id: string
}

const ToastItem = ({ type, id, content }: ToastItemProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const { removeToast } = useToast()

  useEffect(() => {
    const existTimeout = setTimeout(() => {
      setIsClosing(true)
    }, TOAST_DURATION)

    const expireToastTimeout = setTimeout(() => {
      removeToast(id)
    }, TOAST_DURATION + TRANSITION_DURATION)

    return () => {
      clearTimeout(existTimeout)
      clearTimeout(expireToastTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.ToastItem isClosing={isClosing}>
      <S.Item data-type={type}>
        {type === 'success' ? <SuccessIcon /> : <WarningIcon />}
        <p>{content}</p>
      </S.Item>
    </S.ToastItem>
  )
}

export default ToastItem
