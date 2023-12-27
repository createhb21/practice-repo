import { type ReactElement } from 'react'
import { Layout } from '@/components/public/Layout'

export default function HomePage() {
  return <div>Login</div>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout header>{page}</Layout>
}
