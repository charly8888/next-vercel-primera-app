import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayouts'

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className="title">
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className="description">
        Estas en el home <code className="code">pages/index.jsx</code>
      </p>
    </MainLayout>
  )
}
