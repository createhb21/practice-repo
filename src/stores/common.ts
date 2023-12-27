import { v1 } from 'uuid'
import { Toast } from '@/types'
import { atom } from 'recoil'

const toastState = atom<[] | Toast[]>({
  key: `toastState/${v1()}`,
  default: [],
})

export { toastState }
