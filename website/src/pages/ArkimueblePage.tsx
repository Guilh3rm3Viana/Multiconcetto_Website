import { useState } from 'react'
import CatalogueViewer from '../components/CatalogueViewer'
import SiteLayout from '../components/SiteLayout'
import { catalogues } from '../data/catalogues'
import { useArkimuebleMedia } from '../hooks/useArkimuebleMedia'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import type { ArkimuebleMedia } from '../services/arkimuebleMediaRepository'
import arkimuebleLogo from '../../../Fotos/Representadas_Parceiros/Logo Arkimueble.png'
import './ArkimueblePage.css'

type Material = { title: string; image: string; alt: string }

function MaterialSection({ material, reverse }: { material: Material; reverse: boolean }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className={`arkimueble-page__material ${reverse ? 'arkimueble-page__material--reverse' : ''} ${isVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label={material.title}>
      <img className="scroll-reveal" src={material.image} alt={material.alt} loading="lazy" />
      <h2 className="scroll-reveal scroll-reveal--delay-1">{material.title}</h2>
    </section>
  )
}

function ArkimuebleContent({ media }: { media: ArkimuebleMedia }) {
  const [viewerOpen, setViewerOpen] = useState(false)
  const { ref: introRef, isVisible: introVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: catalogueRef, isVisible: catalogueVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: siteRef, isVisible: siteVisible } = useRevealOnScroll<HTMLElement>()
  const materials: Material[] = [
    { title: 'Alumínio', image: media.materials.aluminium, alt: 'Mesa e cadeiras de alumínio num terraço junto ao mar' },
    { title: 'Madeira', image: media.materials.wood, alt: 'Cadeira de madeira com almofadas num espaço de exterior' },
    { title: 'Corda de Poliéster', image: media.materials.polyesterRope, alt: 'Conjunto de jantar exterior com cadeiras de corda' },
    { title: 'Rattan', image: media.materials.rattan, alt: 'Cadeiras e mesas de rattan junto a uma piscina' },
  ]

  return (
    <main className="arkimueble-page">
      <section id="inicio" className="arkimueble-page__hero" aria-labelledby="arkimueble-title">
        <img src={media.hero} alt="Conjunto de sofás e mesas Arkimueble num terraço" fetchPriority="high" />
        <h1 id="arkimueble-title"><img src={arkimuebleLogo} alt="Arkimueble" /></h1>
      </section>

      <section ref={introRef} className={`arkimueble-page__intro ${introVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Sobre a Arkimueble">
        <div className="arkimueble-page__intro-copy scroll-reveal">
          <p>A Arkimueble é uma empresa de Valência especializada em mobiliário de exterior. Há mais de três décadas que o seu foco é oferecer produtos de alta qualidade, aliados a um excelente serviço ao cliente e garantia.</p>
          <p>A paixão pelo design, a atenção meticulosa aos detalhes, as linhas puras nos seus acabamentos e o compromisso com a inovação e a qualidade são os fatores que a distinguem.</p>
        </div>
        <img className="arkimueble-page__intro-photo scroll-reveal scroll-reveal--delay-1" src={media.introduction} alt="Sofá exterior junto a uma piscina ao entardecer" loading="lazy" />
      </section>

      <section ref={catalogueRef} className={`arkimueble-page__banner arkimueble-page__catalogue ${catalogueVisible ? 'scroll-reveal-group--visible' : ''}`} aria-labelledby="arkimueble-catalogue-title">
        <img className="scroll-reveal" src={media.catalogue} alt="Conjunto de sofás Arkimueble num terraço com vista sobre a cidade" loading="lazy" />
        <div className="arkimueble-page__banner-content scroll-reveal scroll-reveal--delay-1">
          <h2 id="arkimueble-catalogue-title">Catálogo Arkimueble</h2>
          <button type="button" onClick={() => setViewerOpen(true)}>Ver catálogo</button>
        </div>
      </section>

      {materials.map((material, index) => <MaterialSection key={material.title} material={material} reverse={index % 2 === 1} />)}

      <section ref={siteRef} className={`arkimueble-page__banner arkimueble-page__website ${siteVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Site oficial da Arkimueble">
        <img className="scroll-reveal" src={media.officialSite} alt="Sofás Arkimueble junto a uma piscina" loading="lazy" />
        <a className="arkimueble-page__banner-content scroll-reveal scroll-reveal--delay-1" href="https://arkimueble.es/" target="_blank" rel="noopener noreferrer">
          Aceda à página da Arkimueble <span aria-hidden="true">↗</span>
        </a>
      </section>

      <MaterialSection material={{ title: 'Guarda-sóis', image: media.materials.parasols, alt: 'Guarda-sol sobre um sofá de exterior num jardim' }} reverse={false} />
      <MaterialSection material={{ title: 'Restauração', image: media.materials.restaurants, alt: 'Mesas e cadeiras de restauração numa esplanada' }} reverse />

      <CatalogueViewer catalogue={catalogues.arkimueble} isOpen={viewerOpen} onClose={() => setViewerOpen(false)} />
    </main>
  )
}

export default function ArkimueblePage() {
  const media = useArkimuebleMedia()

  if (!media) return <div aria-busy="true" aria-label="A carregar Arkimueble" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <ArkimuebleContent media={media} />
    </SiteLayout>
  )
}
