import HomeHero from '../components/HomeHero'
import SiteLayout from '../components/SiteLayout'
import { useHomeMedia } from '../hooks/useHomeMedia'
import AboutSection from './AboutSection'
import { LivingBanner, CategorySection, CatalogueSection, MaterialsSection } from './HomeSections'

export default function HomePage() {
  const media = useHomeMedia()

  if (!media) return <div aria-busy="true" aria-label="A carregar página inicial" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <main>
        <HomeHero images={media.hero} />
        <AboutSection photo={media.founders} />
        <LivingBanner photo={media.living} />
        <CategorySection images={media.categories} />
        <CatalogueSection photo={media.catalogue} />
        <MaterialsSection images={media.materials} />
      </main>
    </SiteLayout>
  )
}
