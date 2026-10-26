import BrandShowcase from '../components/BrandShowcase'
import SiteLayout from '../components/SiteLayout'
import { representedBrands } from '../data/representedBrands'
import { useRepresentedMedia } from '../hooks/useRepresentedMedia'
import './RepresentadasPage.css'

export default function RepresentadasPage() {
  const media = useRepresentedMedia()

  if (!media) return <div aria-busy="true" aria-label="A carregar representadas e parceiros" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <main className="represented-page">
        <h1 className="visually-hidden">Representadas e Parceiros</h1>
        {representedBrands.map((brand, index) => (
          <BrandShowcase key={brand.slug} brand={brand} media={media.brands[brand.slug]} priority={index === 0} />
        ))}
      </main>
    </SiteLayout>
  )
}
