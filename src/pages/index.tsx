import { useState, type ReactElement, useCallback } from 'react'
import { InfiniteScroll } from '@/components/common'
import { Layout } from '@/components/public/Layout'
import { PageTemplate } from '@/components/public/PageTemplate'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const NUMBERS_PER_PAGE = 100

function HomePage() {
  const [numbers, setNumbers] = useState<number[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  const hasMoreData = numbers.length < 1000

  const loadMoreNumbers = useCallback(() => {
    setPage(page => page + 1)
    setLoading(true)
    setTimeout(() => {
      const newNumbers = new Array(NUMBERS_PER_PAGE).fill(1).map((_, i) => page * NUMBERS_PER_PAGE + i)
      setNumbers(nums => [...nums, ...newNumbers])
      setLoading(false)
    }, 300)
  }, [page])

  return (
    <PageTemplate>
      <PageTemplate.PageContentsSection>
        <InfiniteScroll hasMoreData={hasMoreData} isLoading={loading} onBottomHit={loadMoreNumbers} loadOnMount={true}>
          <ul>
            {numbers.map(n => (
              <CardItem key={n}>{n}</CardItem>
            ))}
          </ul>
        </InfiniteScroll>
      </PageTemplate.PageContentsSection>
    </PageTemplate>
  )
}

const CardItem = styled.li`
  ${({ theme }) => css`
    padding: 16px;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${theme.color.gray_20};
    }
  `}
`

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout header footer>
      {page}
    </Layout>
  )
}

export default HomePage
