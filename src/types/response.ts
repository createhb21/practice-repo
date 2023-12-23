import { ResponseCode, ResponseMessages } from '@/constants'
import { type ValueOf } from '.'

export type ResponseStatus = {
  code: ValueOf<typeof ResponseCode>
  message: ValueOf<typeof ResponseMessages>
}

export interface StandardResponse<T> extends ResponseStatus {
  result: T
}
