import type { ReactNode } from 'react'
import SiteFooter from './SiteFooter'
import TopBar from './TopBar'

type Props = {
  children: ReactNode
  footerPhoto: string
}

export default function SiteLayout({ children, footerPhoto }: Props) {
  return (
    <>
      <TopBar />
      {children}
      <SiteFooter photo={footerPhoto} />
    </>
  )
}
