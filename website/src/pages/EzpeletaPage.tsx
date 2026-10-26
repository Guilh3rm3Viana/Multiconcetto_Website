import { useState } from 'react'
import CatalogueViewer from '../components/CatalogueViewer'
import SiteLayout from '../components/SiteLayout'
import { catalogues } from '../data/catalogues'
import { useEzpeletaMedia } from '../hooks/useEzpeletaMedia'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import type { EzpeletaMedia } from '../services/ezpeletaMediaRepository'
import './EzpeletaPage.css'

type Category = { title: string; image: string; alt: string }

function CategorySection({ category, reverse = false }: { category: Category; reverse?: boolean }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className={`ezpeleta-page__category ${reverse ? 'ezpeleta-page__category--reverse' : ''} ${isVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label={category.title}>
      <img className="scroll-reveal" src={category.image} alt={category.alt} loading="lazy" />
      <h2 className="scroll-reveal scroll-reveal--delay-1">{category.title}</h2>
    </section>
  )
}

function EzpeletaContent({ media }: { media: EzpeletaMedia }) {
  const [viewerOpen, setViewerOpen] = useState(false)
  const { ref: introRef, isVisible: introVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: catalogueRef, isVisible: catalogueVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: siteRef, isVisible: siteVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <main className="ezpeleta-page">
      <section id="inicio" className="ezpeleta-page__hero" aria-labelledby="ezpeleta-title">
        <img src={media.hero} alt="Esplanada de café com mesas, cadeiras, guarda-sóis e separadores Ezpeleta" fetchPriority="high" />
        <h1 id="ezpeleta-title"><img src={media.logo} alt="Ezpeleta" /></h1>
      </section>

      <section ref={introRef} className={`ezpeleta-page__intro ${introVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Sobre a Ezpeleta">
        <div className="ezpeleta-page__intro-copy scroll-reveal">
          <p>Criada em 1935 como fábrica de guarda-chuvas, a <strong>Ezpeleta</strong> produz hoje também diversas linhas de mobiliário de exterior e guarda-sóis.</p>
        </div>
        <img className="ezpeleta-page__intro-photo scroll-reveal scroll-reveal--delay-1" src={media.introduction} alt="Mesa e cadeiras Ezpeleta num terraço com vista para o mar" loading="lazy" />
      </section>

      <section ref={catalogueRef} className={`ezpeleta-page__banner ezpeleta-page__catalogue ${catalogueVisible ? 'scroll-reveal-group--visible' : ''}`} aria-labelledby="ezpeleta-catalogue-title">
        <img className="scroll-reveal" src={media.catalogue} alt="Mesa de café e cadeiras brancas Ezpeleta num terraço ao pôr do sol" loading="lazy" />
        <div className="ezpeleta-page__banner-content scroll-reveal scroll-reveal--delay-1">
          <h2 id="ezpeleta-catalogue-title">Catálogo Ezpeleta</h2>
          <button type="button" onClick={() => setViewerOpen(true)}>Ver catálogo</button>
        </div>
      </section>

      <CategorySection category={{ title: 'Mesas e Cadeiras', image: media.categories.tablesAndChairs, alt: 'Mesas e cadeiras Ezpeleta numa esplanada com guarda-sóis junto ao mar' }} />
      <CategorySection category={{ title: 'Lounge', image: media.categories.lounge, alt: 'Espreguiçadeiras Ezpeleta alinhadas junto à piscina do Hotel Minho' }} reverse />

      <section ref={siteRef} className={`ezpeleta-page__banner ezpeleta-page__website ${siteVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Site oficial da Ezpeleta">
        <img className="scroll-reveal" src={media.officialSite} alt="Espreguiçadeiras e guarda-sóis Ezpeleta junto a uma piscina com parede de pedra" loading="lazy" />
        <a className="ezpeleta-page__banner-content scroll-reveal scroll-reveal--delay-1" href="https://www.ezpeleta.com/" target="_blank" rel="noopener noreferrer">
          Aceda à página da Ezpeleta <span aria-hidden="true">↗</span>
        </a>
      </section>

      <CategorySection category={{ title: 'Guarda-sóis', image: media.categories.parasols, alt: 'Guarda-sóis brancos Ezpeleta sobre mesas e cadeiras verdes num terraço junto ao mar' }} />
      <CategorySection category={{ title: 'Separadores', image: media.categories.dividers, alt: 'Separadores Ezpeleta com floreiras a delimitar uma esplanada urbana' }} reverse />

      <CatalogueViewer catalogue={catalogues.ezpeletaContract} isOpen={viewerOpen} onClose={() => setViewerOpen(false)} />
    </main>
  )
}

export default function EzpeletaPage() {
  const media = useEzpeletaMedia()

  if (!media) return <div aria-busy="true" aria-label="A carregar Ezpeleta" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <EzpeletaContent media={media} />
    </SiteLayout>
  )
}
