import { type UserModel } from '@/types'

export type UserCB = (user: UserModel | null, error: any) => void

export class Auth {
  private key
  private user: UserModel | null
  private cb: UserCB | null
  static isAuth: boolean
  constructor() {
    this.key = 'KKE_ADMIN'
    this.user = null
    this.cb = null
  }

  get isAuth() {
    return Boolean(this.user?.refreshToken)
  }

  get accessToken() {
    return this.user?.accessToken
  }

  get refreshToken() {
    return this.user?.refreshToken
  }

  get isAdmin() {
    return this.user?.level === 'admin'
  }

  get level() {
    return this.user?.level
  }

  changeAccessToken(token: string) {
    const newUser = { ...this.user, accessToken: token }
    localStorage.setItem(this.key, JSON.stringify(newUser))
    this.setUser(newUser as UserModel)
  }

  changeRefreshToken(token: string) {
    const newUser = { ...this.user, refreshToken: token }
    localStorage.setItem(this.key, JSON.stringify(newUser))
    this.setUser(newUser as UserModel)
  }

  updatePasswordChanged(pwChanged: string) {
    const newUser = { ...this.user, passwordChanged: pwChanged }
    localStorage.setItem(this.key, JSON.stringify(newUser))
    this.setUser(newUser as UserModel)
  }

  onAuthStateChanged(cb: UserCB) {
    this.cb = cb

    this.onUserChange(this.user)

    return () => {
      this.cb = null
    }
  }

  private onUserChange(user: UserModel | null, error?: { message: string }) {
    this.cb && this.cb(user, error)
  }

  private setUser(user: UserModel) {
    this.user = user
  }

  signIn(data: UserModel) {
    localStorage.setItem(this.key, JSON.stringify(data))
    this.onUserChange(data)
    this.resolveUser()
  }

  signOut() {
    localStorage.removeItem(this.key)
    this.onUserChange(null)
    this.user = null
  }

  resolveUser() {
    if (window) {
      const signedInUser = localStorage.getItem(this.key)

      if (signedInUser) {
        this.setUser(JSON.parse(localStorage.getItem(this.key)!))
      }
    }

    return this
  }
}
