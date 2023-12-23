import { type ReactElement } from 'react'
import { Layout } from '@/components/public/Layout'

export default function HomePage() {
  return <main>Hello</main>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
