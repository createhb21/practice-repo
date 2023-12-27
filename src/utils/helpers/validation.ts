/* eslint-disable no-useless-escape */

export const checkEmailValidation = (email: string) => {
  const checkEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@([\w-])+(\.[a-zA-Z]{2,4}){1,2}$/
  // 64, 63: 백에서 쓰는 joi 라이버러리의 최대 값

  const [id, domain] = email.split(/[.@]/)

  if (id?.length >= 64 || domain?.length >= 63) {
    return false
  }

  return checkEmail.test(email)
}

export const checkPasswordLength = (v: string) => {
  const minCheck = v.length >= 8
  const maxCheck = v.length <= 16

  return minCheck && maxCheck
}

export const checkPasswordType = (value: string) => {
  const checkNumber = /(?=.*[0-9])/ //  숫자 체크
  const checkBigLetter = /(?=.*[A-Z])/ //  대문자 체크
  const checkSmallLetter = /(?=.*[a-z])/
  const checkSpeacial = /(?=.*[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/])/ //  특수 문자 체크

  const typeObj = {
    isNumber: false,
    isBigLetter: false,
    isSmallLetter: false,
    isSpeacial: false,
  }

  typeObj.isNumber = checkNumber.test(value)
  typeObj.isBigLetter = checkBigLetter.test(value)
  typeObj.isSmallLetter = checkSmallLetter.test(value)
  typeObj.isSpeacial = checkSpeacial.test(value)

  return Object.values(typeObj).filter(item => item).length > 1
}

export const checkPasswordConfirmValid = (password: string, confirmPassword: string): boolean =>
  password === confirmPassword

export const phoneValidCheck = (phoneNum: string) => {
  const regex = /^([0-9]{2})([0-9]{8,})$/

  return regex.test(phoneNum)
}

export const checkPhoneNumLength = (value: string) => value.length >= 10
