export type KeyOf<T> = keyof T

export type ValueOf<T> = T[keyof T]

export type IndexOf<T, K extends KeyOf<T>> = ValueOf<T[K]>

export type ResponseStatus = {
  ok: boolean
}

export interface StandardResponse<T> extends ResponseStatus {
  result: T
}

export interface Toast {
  id: string
  type?: 'success' | 'warning'
  content: string
}
