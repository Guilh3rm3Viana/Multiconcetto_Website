import NardiCatalogues from '../components/NardiCatalogues'
import SiteLayout from '../components/SiteLayout'
import { useNardiMedia } from '../hooks/useNardiMedia'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import type { NardiMedia } from '../services/nardiMediaRepository'
import './NardiPage.css'

type Category = { title: string; image: string; alt: string }

function CategorySection({ category, reverse = false }: { category: Category; reverse?: boolean }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className={`nardi-page__category ${reverse ? 'nardi-page__category--reverse' : ''} ${isVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label={category.title}>
      <img className="scroll-reveal" src={category.image} alt={category.alt} loading="lazy" />
      <h2 className="scroll-reveal scroll-reveal--delay-1">{category.title}</h2>
    </section>
  )
}

function NardiContent({ media }: { media: NardiMedia }) {
  const { ref: introRef, isVisible: introVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: siteRef, isVisible: siteVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <main className="nardi-page">
      <section id="inicio" className="nardi-page__hero" aria-labelledby="nardi-title">
        <img src={media.hero} alt="Sofá Nardi num jardim iluminado ao entardecer, junto à piscina" fetchPriority="high" />
        <h1 id="nardi-title" className="visually-hidden">Nardi</h1>
      </section>

      <section ref={introRef} className={`nardi-page__intro ${introVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Sobre a Nardi">
        <div className="nardi-page__intro-copy scroll-reveal">
          <p>A <strong>Nardi</strong> é uma companhia italiana fundada em 1990 e que se dedica à produção de mobiliário exterior em resina e alumínio.</p>
          <p>Todo o mobiliário fabricado pela <strong>Nardi</strong> é adequado tanto para o uso doméstico como para contract.</p>
        </div>
        <img className="nardi-page__intro-photo scroll-reveal scroll-reveal--delay-1" src={media.introduction} alt="Espreguiçadeira Nardi num deck de madeira junto à piscina" loading="lazy" />
      </section>

      <NardiCatalogues photo={media.catalogue} />

      <CategorySection category={{ title: 'Mesas e Cadeiras', image: media.categories.tablesAndChairs, alt: 'Mesa Nardi com cadeiras em tons suaves num jardim' }} />
      <CategorySection category={{ title: 'Sofás', image: media.categories.sofas, alt: 'Sofá verde Nardi com almofadas e mesas de apoio no jardim' }} reverse />

      <section ref={siteRef} className={`nardi-page__banner nardi-page__website ${siteVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Site oficial da Nardi">
        <img className="scroll-reveal" src={media.officialSite} alt="Conjunto de sofá, cadeirões e mesas Nardi num jardim verdejante" loading="lazy" />
        <a className="nardi-page__website-link scroll-reveal scroll-reveal--delay-1" href="https://www.nardioutdoor.com/" target="_blank" rel="noopener noreferrer">
          Aceda à página da Nardi <span aria-hidden="true">↗</span>
        </a>
      </section>

      <CategorySection category={{ title: 'Lounge', image: media.categories.lounge, alt: 'Cadeirões amarelos Nardi com mesas de apoio num pátio ao entardecer' }} />
      <CategorySection category={{ title: 'Restauração', image: media.categories.restaurants, alt: 'Mesas e bancos altos Nardi numa esplanada com vista para o mar' }} reverse />
    </main>
  )
}

export default function NardiPage() {
  const media = useNardiMedia()

  if (!media) return <div aria-busy="true" aria-label="A carregar Nardi" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <NardiContent media={media} />
    </SiteLayout>
  )
}
