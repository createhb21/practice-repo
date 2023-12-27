/* eslint-disable no-useless-escape */

export const onlyString = (string: string) => {
  if (!string) {
    return ''
  }

  const regExp = /[^0-9]/g // 숫자가 아닌 문자열을 선택하는 정규식
  // 원래 문자열에서 숫자가 아닌 모든 문자열을 빈 문자로 변경
  return string.replace(regExp, '')
}

export const onlyNumber = (string: string) => {
  if (!string) {
    return ''
  }

  const regExp = /[^0-9]/g // 숫자가 아닌 문자열을 선택하는 정규식
  // 원래 문자열에서 숫자가 아닌 모든 문자열을 빈 문자로 변경
  return string.replace(regExp, '')
}

export const addZeroFirstString = (num: number) => {
  if (num === undefined) {
    return
  }

  return String(num).length === 1 ? `0${num}` : num
}

export const changeFirstStringUpperCase = (string: string) => {
  return string.replace(/^[a-z]/, string => string.toUpperCase())
}

export const comma = (str: string) => str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')

export const unComma = (str: string) => str.replace(/[^\d]+/g, '')

export const formatCurrency = (number: string) => number && comma(unComma(number))

export const formatOrderNum = (str: string | undefined): string => {
  if (!str) {
    return ''
  }
  return str.replace(/(\S{1})(\S{15})/g, '$1-$2')
}

export const isNumber = (string: string) => {
  const regExp = /[^0-9]/g // 숫자가 아닌 문자열을 선택하는 정규식

  return regExp.test(string)
}

export const numericOnlyWithColons = (v: string) => {
  // eslint-disable-next-line
  const regex = /[^0-9\:]/g

  return v.replaceAll(regex, '')
}

export const numericOnly = (v: string) => {
  const regex = /[^0-9]/g

  return v.toString().replaceAll(regex, '')
}

export const stringOnly = (v: string) => {
  const regex = /[^a-zA-Z가-힣]/g

  return v.toString().replaceAll(regex, '')
}

export const formatMobileExceptZero = (value: string) => {
  const [firstValue, ...restValue] = value

  if (firstValue === '0') {
    return onlyNumber(restValue.join() ?? '')
  }

  return onlyNumber(value)
}

export const formatMobile = (phone: string) => phone.replace(/^([0-9]{2})([0-9]{8,})$/, '$1 $2')

export const getPhoneWithoutZero = (phone: string) => phone.replace(/(^0)/, '')
