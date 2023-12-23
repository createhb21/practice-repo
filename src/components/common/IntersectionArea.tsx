import { useRef, useEffect } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface IntersectionAreaProps {
  hasMore: boolean
  onImpression: () => void
}

function IntersectionArea({ hasMore, onImpression }: IntersectionAreaProps) {
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchMoreObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting && hasMore) {
          onImpression()
        }
      },
      {
        rootMargin: '24% 0px',
        threshold: 0,
      }
    )
    if (triggerRef.current) {
      fetchMoreObserver.observe(triggerRef.current)
    }

    return () => {
      fetchMoreObserver.disconnect()
    }
  })

  return (
    <>
      {hasMore && (
        <ViewMore ref={triggerRef} id="trigger-fetching">
          <span>더 보기</span>
        </ViewMore>
      )}
    </>
  )
}

const ViewMore = styled.div`
  ${({ theme }) => css`
    & > span {
      ${theme.a11y.visuallyHidden};
    }
  `}
`

export default IntersectionArea
