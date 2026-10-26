import { useState } from 'react'
import CatalogueViewer from '../components/CatalogueViewer'
import SiteLayout from '../components/SiteLayout'
import { catalogues } from '../data/catalogues'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useRocoMedia } from '../hooks/useRocoMedia'
import type { RocoMedia } from '../services/rocoMediaRepository'
import './RocoPage.css'

type Category = { title: string; image: string; alt: string }

function CategorySection({ category, reverse = false }: { category: Category; reverse?: boolean }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className={`roco-page__category ${reverse ? 'roco-page__category--reverse' : ''} ${isVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label={category.title}>
      <img className="scroll-reveal" src={category.image} alt={category.alt} loading="lazy" />
      <h2 className="scroll-reveal scroll-reveal--delay-1">{category.title}</h2>
    </section>
  )
}

function RocoContent({ media }: { media: RocoMedia }) {
  const [viewerOpen, setViewerOpen] = useState(false)
  const { ref: introRef, isVisible: introVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: catalogueRef, isVisible: catalogueVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: siteRef, isVisible: siteVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <main className="roco-page">
      <section id="inicio" className="roco-page__hero" aria-labelledby="roco-title">
        <img src={media.hero} alt="Mesa de madeira e cadeiras estofadas ROCO num terraço ao pôr do sol" fetchPriority="high" />
        <h1 id="roco-title"><img src={media.logo} alt="ROCO" /></h1>
      </section>

      <section ref={introRef} className={`roco-page__intro ${introVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Sobre a ROCO">
        <div className="roco-page__intro-copy scroll-reveal">
          <p><strong>ROCO</strong> é a marca da <strong>Romero</strong> mais vocacionada para o Design de Interiores e para os Projetos de Contract.</p>
          <p>Todo o seu material é 100% personalizável, com fabricação e estofo próprio.</p>
        </div>
        <img className="roco-page__intro-photo scroll-reveal scroll-reveal--delay-1" src={media.introduction} alt="Mesas e cadeiras estofadas ROCO num restaurante de ambiente acolhedor" loading="lazy" />
      </section>

      <section ref={catalogueRef} className={`roco-page__banner roco-page__catalogue ${catalogueVisible ? 'scroll-reveal-group--visible' : ''}`} aria-labelledby="roco-catalogue-title">
        <img className="scroll-reveal" src={media.catalogue} alt="Sofá e cadeirão ROCO com mesas de centro numa sala de estar" loading="lazy" />
        <div className="roco-page__banner-content scroll-reveal scroll-reveal--delay-1">
          <h2 id="roco-catalogue-title">Catálogo ROCO</h2>
          <button type="button" onClick={() => setViewerOpen(true)}>Ver catálogo</button>
        </div>
      </section>

      <CategorySection category={{ title: 'Hotéis', image: media.categories.hotels, alt: 'Quarto de hotel com cadeirão e mesas de apoio ROCO junto à janela' }} />
      <CategorySection category={{ title: 'Restauração', image: media.categories.restaurants, alt: 'Mesas e cadeiras ROCO num espaço de restauração de tons neutros' }} reverse />

      <section ref={siteRef} className={`roco-page__banner roco-page__website ${siteVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Site oficial da ROCO">
        <img className="scroll-reveal" src={media.officialSite} alt="Cadeirões estofados com mesa de madeira num restaurante" loading="lazy" />
        <a className="roco-page__banner-content scroll-reveal scroll-reveal--delay-1" href="https://roco.es/es" target="_blank" rel="noopener noreferrer">
          Aceda à página da ROCO <span aria-hidden="true">↗</span>
        </a>
      </section>

      <CategorySection category={{ title: 'Lobbies', image: media.categories.lobbies, alt: 'Sofá, cadeirão e mesas de centro ROCO num lobby com janelas amplas' }} />
      <CategorySection category={{ title: 'Exterior', image: media.categories.outdoor, alt: 'Cadeirões azuis e mesa de exterior ROCO num terraço junto à piscina' }} reverse />

      <CatalogueViewer catalogue={catalogues.roco} isOpen={viewerOpen} onClose={() => setViewerOpen(false)} />
    </main>
  )
}

export default function RocoPage() {
  const media = useRocoMedia()

  if (!media) return <div aria-busy="true" aria-label="A carregar ROCO" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <RocoContent media={media} />
    </SiteLayout>
  )
}
