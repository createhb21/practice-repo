export interface VerifyEmailQueryModel {
  email: string
}

export interface CheckVerifyCodeQueryModel extends VerifyEmailQueryModel {
  authCode: string
}

export interface UpdatePasswordVerifyQueryModel extends CheckVerifyCodeQueryModel {
  password: string
}

export type AuthLevel = 'super' | 'admin' | 'user'

export interface LoginQueryModel {
  email?: string
  password?: string
}

export interface UserModel {
  accessToken: string
  level: AuthLevel
  name: string
  passwordUpdated: string
  refreshToken: string
}

export interface TokensServerModel {
  accessToken: string
  refreshToken: string
}

export interface VerificationNumType {
  verifiCode?: string
}

export interface LabelInputType extends LoginQueryModel, VerificationNumType {}

export interface PasswordType {
  newPassword: string
  newPassword_type: string
  newPassword_length: string
  confirmPassword: string
  confirmPassword_confirm: string
}

export interface ChangePasswordType extends PasswordType {
  currentPassword: string
  newPassword_Same: string
}
