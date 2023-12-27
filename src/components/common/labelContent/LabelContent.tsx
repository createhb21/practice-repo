import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
  className?: string
}

interface LabelContentProps extends Props {
  hasBg?: boolean
  heading?: string
}

interface ContentProps extends Props {
  heading?: string
  required?: boolean
}

const LabelContent = ({ className, children, heading }: LabelContentProps) => {
  return (
    <LabelContentStyled className={className}>
      {heading && <Heading>{heading}</Heading>}
      {children}
    </LabelContentStyled>
  )
}

LabelContent.Content = function Content({ children, heading, required, ...rest }: ContentProps) {
  return (
    <ContentStyled {...rest}>
      {heading && (
        <SubHeading>
          {heading}
          {required && <Required>*</Required>}
        </SubHeading>
      )}
      <SubContent>{children}</SubContent>
    </ContentStyled>
  )
}

export const LabelContentStyled = styled.div`
  margin-bottom: 40px;
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    ${theme.font.medium_13};

    margin-bottom: 9px;
    color: ${theme.color.gray_50};
  `}
`

const ContentStyled = styled.div`
  ${({ theme }) => css`
    &[data-isfocus='true'] {
      border-bottom: 1px solid ${theme.color.blue_10};

      > dt {
        color: ${theme.color.blue_10};
        background-color: ${theme.color.blue_10_10};
      }
    }

    &[data-haserr='true'] {
      border-bottom: 1px solid ${theme.color.red_20};

      > dt {
        color: ${theme.color.red_20};
        background-color: ${theme.color.red_10_10};
      }
    }
  `}
`

const SubHeading = styled.dt`
  ${({ theme }) => css`
    ${theme.font.medium_14};

    display: flex;
    align-items: center;
    min-height: 48px;
    height: 100%;
    color: ${theme.color.gray_50};
    background-color: inherits;
  `}
`

const Required = styled.div`
  ${({ theme }) => css`
    margin-left: 4px;
    color: ${theme.color.red_20};
  `}
`

const SubContent = styled.dd`
  ${({ theme }) => css`
    ${theme.font.regular_14};

    display: flex;
    align-items: center;
    color: ${theme.color.black};

    & > span {
      ${theme.font.regular_14};
    }
  `}
`

export default LabelContent
