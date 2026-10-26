import ExportjunkCatalogues from '../components/ExportjunkCatalogues'
import SiteLayout from '../components/SiteLayout'
import { useExportjunkMedia } from '../hooks/useExportjunkMedia'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import type { ExportjunkMedia } from '../services/exportjunkMediaRepository'
import './ExportjunkPage.css'

type Category = { title: string; image: string; alt: string }

function CategorySection({ category, reverse = false }: { category: Category; reverse?: boolean }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className={`exportjunk-page__category ${reverse ? 'exportjunk-page__category--reverse' : ''} ${isVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label={category.title}>
      <img className="scroll-reveal" src={category.image} alt={category.alt} loading="lazy" />
      <h2 className="scroll-reveal scroll-reveal--delay-1">{category.title}</h2>
    </section>
  )
}

function ExportjunkContent({ media }: { media: ExportjunkMedia }) {
  const { ref: introRef, isVisible: introVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: siteRef, isVisible: siteVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <main className="exportjunk-page">
      <section id="inicio" className="exportjunk-page__hero" aria-labelledby="exportjunk-title">
        <img src={media.hero} alt="Sofás de madeira Exportjunk num terraço iluminado ao entardecer" fetchPriority="high" />
        <h1 id="exportjunk-title"><img src={media.logo} alt="Exportjunk" /></h1>
      </section>

      <section ref={introRef} className={`exportjunk-page__intro ${introVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Sobre a Exportjunk">
        <div className="exportjunk-page__intro-copy scroll-reveal">
          <p>A <strong>Exportjunk</strong> é uma empresa com 43 anos de idade que se dedica ao fabrico de móveis em madeira maciça.</p>
          <p>De entre as madeiras com que trabalha destacam-se o Carvalho, Iroko, Suar e Teka reciclada.</p>
        </div>
        <img className="exportjunk-page__intro-photo scroll-reveal scroll-reveal--delay-1" src={media.introduction} alt="Conjunto de mesa e cadeiras de madeira Exportjunk ao pôr do sol" loading="lazy" />
      </section>

      <ExportjunkCatalogues photo={media.catalogue} />

      <CategorySection category={{ title: 'Mesas e Cadeiras', image: media.categories.tablesAndChairs, alt: 'Mesa de madeira maciça e cadeiras Exportjunk junto a uma oliveira' }} />
      <CategorySection category={{ title: 'Espreguiçadeiras', image: media.categories.loungers, alt: 'Espreguiçadeira de madeira Exportjunk com almofada junto à piscina' }} reverse />

      <section ref={siteRef} className={`exportjunk-page__banner exportjunk-page__website ${siteVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Site oficial da Exportjunk">
        <img className="scroll-reveal" src={media.officialSite} alt="Sofá e cadeirões Exportjunk num terraço com vista para as montanhas" loading="lazy" />
        <a className="exportjunk-page__website-link scroll-reveal scroll-reveal--delay-1" href="https://exportjunk.com/" target="_blank" rel="noopener noreferrer">
          Aceda à página da Exportjunk <span aria-hidden="true">↗</span>
        </a>
      </section>

      <CategorySection category={{ title: 'Sofás', image: media.categories.sofas, alt: 'Sofá e cadeirões de madeira Exportjunk no terraço de um hotel rural' }} />
      <CategorySection category={{ title: 'Daybeds', image: media.categories.daybeds, alt: 'Daybed de madeira Exportjunk com cortinas brancas num jardim ao entardecer' }} reverse />
    </main>
  )
}

export default function ExportjunkPage() {
  const media = useExportjunkMedia()

  if (!media) return <div aria-busy="true" aria-label="A carregar Exportjunk" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <ExportjunkContent media={media} />
    </SiteLayout>
  )
}
