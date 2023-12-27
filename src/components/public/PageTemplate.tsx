import React, { PropsWithChildren } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface PageSectionProps {
  noneGutter?: boolean
  className?: string
}

export const PageTemplate = ({ children }: PropsWithChildren<PageSectionProps>) => {
  return <React.Fragment>{children}</React.Fragment>
}

PageTemplate.PageContentsSection = function PageContentsSection({
  noneGutter,
  className,
  children,
}: PropsWithChildren<PageSectionProps>) {
  return (
    <StyledPageContentsSection noneGutter={noneGutter} className={className}>
      {children}
    </StyledPageContentsSection>
  )
}

interface PageSectionProps {
  noneGutter?: boolean
}

const StyledPageContentsSection = styled.section<PageSectionProps>`
  ${({ noneGutter }) => css`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: ${noneGutter ? 0 : '0 20px'};
  `}
`
