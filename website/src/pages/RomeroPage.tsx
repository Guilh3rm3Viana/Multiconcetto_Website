import { useState } from 'react'
import CatalogueViewer from '../components/CatalogueViewer'
import SiteLayout from '../components/SiteLayout'
import { catalogues } from '../data/catalogues'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useRomeroMedia } from '../hooks/useRomeroMedia'
import type { RomeroMedia } from '../services/romeroMediaRepository'
import './RomeroPage.css'

type Category = { title: string; image: string; alt: string }

function CategorySection({ category, reverse = false }: { category: Category; reverse?: boolean }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className={`romero-page__category ${reverse ? 'romero-page__category--reverse' : ''} ${isVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label={category.title}>
      <h2 className="scroll-reveal">{category.title}</h2>
      <img className="scroll-reveal scroll-reveal--delay-1" src={category.image} alt={category.alt} loading="lazy" />
    </section>
  )
}

function RomeroContent({ media }: { media: RomeroMedia }) {
  const [viewerOpen, setViewerOpen] = useState(false)
  const { ref: introRef, isVisible: introVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: catalogueRef, isVisible: catalogueVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: siteRef, isVisible: siteVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <main className="romero-page">
      <section id="inicio" className="romero-page__hero" aria-labelledby="romero-title">
        <img src={media.hero} alt="Mesas e cadeiras Romero numa pizzaria com forno a lenha" fetchPriority="high" />
        <h1 id="romero-title"><img src={media.logo} alt="Romero" /></h1>
      </section>

      <section ref={introRef} className={`romero-page__intro ${introVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Sobre a Romero">
        <div className="romero-page__intro-copy scroll-reveal">
          <p>A <strong>ROMERO</strong> é uma empresa valenciana que se dedica à fabricação de mobiliário para Hotelaria e Coletividades desde 1945.</p>
          <p>A <strong>ROMERO</strong> conta com uma ampla gama de produtos, com desenho funcional, e fabricados com material de alta resistência, pensados para oferecer comodidade e estilo em todo o tipo de espaços.</p>
        </div>
        <img className="romero-page__intro-photo scroll-reveal scroll-reveal--delay-1" src={media.introduction} alt="Mesa redonda e cadeiras Romero numa esplanada de café" loading="lazy" />
      </section>

      <section ref={catalogueRef} className={`romero-page__banner romero-page__catalogue ${catalogueVisible ? 'scroll-reveal-group--visible' : ''}`} aria-labelledby="romero-catalogue-title">
        <img className="scroll-reveal" src={media.catalogue} alt="Mesas e bancos altos Romero num terraço com vista para o mar" loading="lazy" />
        <div className="romero-page__banner-content scroll-reveal scroll-reveal--delay-1">
          <h2 id="romero-catalogue-title">Catálogo Romero</h2>
          <button type="button" onClick={() => setViewerOpen(true)}>Ver catálogo</button>
        </div>
      </section>

      <CategorySection category={{ title: 'Restauração', image: media.categories.restaurants, alt: 'Cadeiras entrançadas e mesa Romero numa esplanada junto ao mar' }} />
      <CategorySection category={{ title: 'Catering', image: media.categories.catering, alt: 'Sala de banquetes equipada com mesas redondas e cadeiras azuis Romero' }} reverse />

      <section ref={siteRef} className={`romero-page__banner romero-page__website ${siteVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Site oficial da Romero">
        <img className="scroll-reveal" src={media.officialSite} alt="Cadeirões estofados Romero com mesa de madeira num restaurante" loading="lazy" />
        <a className="romero-page__banner-content scroll-reveal scroll-reveal--delay-1" href="https://www.mueblesromerohosteleria.com/es" target="_blank" rel="noopener noreferrer">
          Aceda à página da Romero <span aria-hidden="true">↗</span>
        </a>
      </section>

      <CategorySection category={{ title: 'Exterior', image: media.categories.outdoor, alt: 'Mesas e cadeiras brancas Romero num pátio com parede de pedra' }} />

      <CatalogueViewer catalogue={catalogues.romero} isOpen={viewerOpen} onClose={() => setViewerOpen(false)} />
    </main>
  )
}

export default function RomeroPage() {
  const media = useRomeroMedia()

  if (!media) return <div aria-busy="true" aria-label="A carregar Romero" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <RomeroContent media={media} />
    </SiteLayout>
  )
}
