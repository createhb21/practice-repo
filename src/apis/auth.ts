import axios from 'axios'

import type * as type from '@/types/auth'
import { ax } from '.'

export const login = async (req: type.LoginQueryModel): Promise<type.UserModel> => {
  const res = await ax.post('/signin', req)
  return res.data
}

export const logout = () => ax.post('/signout')

export const renewAccessToken = async (refreshToken: string): Promise<type.TokensServerModel> => {
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/tokens`, {
    headers: { Authorization: `Bearer ${refreshToken}` },
  })

  return res.data
}
