import '@emotion/react'
import { theme } from '@/styles'

type CustomTheme = typeof theme

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
