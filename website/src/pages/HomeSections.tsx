import type { HomeMedia } from '../services/mediaRepository'
import ImageStrip from '../components/ImageStrip'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import './HomeSections.css'

export function LivingBanner({ photo }: { photo: string }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section ref={ref} className={`living-banner ${isVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label="In and outdoor living">
      <div className="living-banner__image">
        <img className="scroll-reveal" src={photo} alt="Conjunto de mobiliário para exterior" loading="lazy" />
        <h2 className="scroll-reveal scroll-reveal--delay-1">IN &amp; OUTDOOR LIVING</h2>
      </div>
    </section>
  )
}

export function CategorySection({ images }: { images: HomeMedia['categories'] }) {
  return <ImageStrip title="Áreas de mobiliário" items={[
    { label: 'Outdoor', image: images.outdoor },
    { label: 'Interiors', image: images.interiors },
    { label: 'Restauração', image: images.restaurants },
    { label: 'Hotelaria', image: images.hospitality },
  ]} />
}

export function CatalogueSection({ photo }: { photo: string }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section ref={ref} className={`catalogue-section ${isVisible ? 'scroll-reveal-group--visible' : ''}`}>
      <div className="catalogue-section__inner">
        <div className="catalogue-section__copy scroll-reveal">
          <h2>INSPIRED BY LIFE</h2>
          <p>Faça download de todos os nossos catálogos</p>
          <a href="/catalogos">Catálogos <span aria-hidden="true">↗</span></a>
        </div>
        <img className="scroll-reveal scroll-reveal--delay-1" src={photo} alt="Cama de exterior com cobertura branca" loading="lazy" />
      </div>
    </section>
  )
}

export function MaterialsSection({ images }: { images: HomeMedia['materials'] }) {
  return <ImageStrip title="Materiais" items={[
    { label: 'Alumínio', image: images.aluminium },
    { label: 'Madeira', image: images.wood },
    { label: 'Corda', image: images.rope },
    { label: 'Polipropileno', image: images.polypropylene },
    { label: 'Rattan', image: images.rattan },
  ]} />
}
