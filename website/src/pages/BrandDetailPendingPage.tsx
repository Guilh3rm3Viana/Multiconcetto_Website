import SiteLayout from '../components/SiteLayout'
import type { RepresentedBrand } from '../data/representedBrands'
import { useRepresentedMedia } from '../hooks/useRepresentedMedia'
import './BrandDetailPendingPage.css'

export default function BrandDetailPendingPage({ brand }: { brand: RepresentedBrand }) {
  const media = useRepresentedMedia()

  if (!media) return <div aria-busy="true" aria-label={`A carregar ${brand.name}`} />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <main className="brand-detail-pending">
        <div className="brand-detail-pending__content">
          <h1>{brand.name}</h1>
          <p>A página desta representada está em preparação.</p>
          <a href="/representadas">Voltar às representadas</a>
        </div>
      </main>
    </SiteLayout>
  )
}
