import { atom } from 'recoil'
import { Toast } from '@/types'

const toastState = atom<[] | Toast[]>({
  key: 'toastState',
  default: [],
})

export { toastState }
