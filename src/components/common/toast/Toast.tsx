import React from 'react'
import { toastState } from '@/stores/common'
import { useRecoilValue } from 'recoil'

import ToastItem from './item/ToastItem'
import * as S from './Toast.styled'

const Toast = () => {
  const toastList = useRecoilValue(toastState)

  return (
    <S.Toast>
      {toastList.map(toast => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </S.Toast>
  )
}

export default Toast
