import LmmCatalogues from '../components/LmmCatalogues'
import SiteLayout from '../components/SiteLayout'
import { useLmmMedia } from '../hooks/useLmmMedia'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import type { LmmMedia } from '../services/lmmMediaRepository'
import './LmmPage.css'

type Category = { title: string; image: string; alt: string }

function CategorySection({ category, reverse = false }: { category: Category; reverse?: boolean }) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className={`lmm-page__category ${reverse ? 'lmm-page__category--reverse' : ''} ${isVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label={category.title}>
      <img className="scroll-reveal" src={category.image} alt={category.alt} loading="lazy" />
      <h2 className="scroll-reveal scroll-reveal--delay-1">{category.title}</h2>
    </section>
  )
}

function LmmContent({ media }: { media: LmmMedia }) {
  const { ref: introRef, isVisible: introVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: siteRef, isVisible: siteVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <main className="lmm-page">
      <section id="inicio" className="lmm-page__hero" aria-labelledby="lmm-title">
        <img src={media.hero} alt="Mesa de vidro Living e cadeiras brancas LMM numa sala com janelas para o jardim" fetchPriority="high" />
        <h1 id="lmm-title"><img src={media.logo} alt="LMM — Luis Maroto Mobiliário" /></h1>
      </section>

      <section ref={introRef} className={`lmm-page__intro ${introVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Sobre a LMM">
        <div className="lmm-page__intro-copy scroll-reveal">
          <p>A <strong>Luis Maroto Mobiliário (LMM)</strong> é uma empresa de Granada dedicada à importação e comercialização de Cadeiras, Mesas, Bancos Bar e Consolas para diversos espaços.</p>
        </div>
        <img className="lmm-page__intro-photo scroll-reveal scroll-reveal--delay-1" src={media.introduction} alt="Mesa de vidro Smart V com cadeiras de escritório LMM em tons claros" loading="lazy" />
      </section>

      <LmmCatalogues photo={media.catalogue} />

      <CategorySection category={{ title: 'Cadeiras', image: media.categories.chairs, alt: 'Mesa Izan com quatro cadeiras LMM estofadas em tons neutros' }} />
      <CategorySection category={{ title: 'Bancos Bar', image: media.categories.barStools, alt: 'Banco bar Cotton LMM com assento estofado claro numa cozinha' }} reverse />

      <section ref={siteRef} className={`lmm-page__banner lmm-page__website ${siteVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="Site oficial da LMM">
        <img className="scroll-reveal" src={media.officialSite} alt="Mesa Smart LMM com cadeiras de escritório pretas junto a uma janela" loading="lazy" />
        <a className="lmm-page__website-link scroll-reveal scroll-reveal--delay-1" href="https://www.lumamargranada.com/" target="_blank" rel="noopener noreferrer">
          Aceda à página da LMM <span aria-hidden="true">↗</span>
        </a>
      </section>

      <CategorySection category={{ title: 'Mesas', image: media.categories.tables, alt: 'Mesa LMM com cadeiras pretas numa sala de jantar luminosa' }} reverse />
      <CategorySection category={{ title: 'Cadeiras de Escritório', image: media.categories.officeChairs, alt: 'Cadeiras de escritório LMM em torno de uma mesa de vidro, junto a uma estante' }} />
    </main>
  )
}

export default function LmmPage() {
  const media = useLmmMedia()

  if (!media) return <div aria-busy="true" aria-label="A carregar LMM" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <LmmContent media={media} />
    </SiteLayout>
  )
}
