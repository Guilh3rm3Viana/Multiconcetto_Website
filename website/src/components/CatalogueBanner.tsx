import { useState } from 'react'
import type { Catalogue } from '../data/catalogues'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import CatalogueViewer from './CatalogueViewer'
import './CatalogueBanner.css'

type Props = {
  id: string
  brandName: string
  photo: string
  photoAlt: string
  className: string
  entries: readonly { title: string; catalogue: Catalogue }[]
  layout?: 'stacked' | 'three-columns'
}

export default function CatalogueBanner({ id, brandName, photo, photoAlt, className, entries, layout = 'stacked' }: Props) {
  const [selectedCatalogue, setSelectedCatalogue] = useState<Catalogue | null>(null)
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <>
      <section id={id} ref={ref} className={`catalogue-banner catalogue-banner--${layout} ${className} ${isVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label={`Catálogos ${brandName}`}>
        <img className="scroll-reveal" src={photo} alt={photoAlt} loading="lazy" />
        <div className="catalogue-banner__list scroll-reveal scroll-reveal--delay-1">
          {entries.map(({ title, catalogue }) => (
            <div key={title} className="catalogue-banner__entry">
              <h2>{title}</h2>
              <button type="button" aria-label={`Ver ${title.toLowerCase()}`} onClick={() => setSelectedCatalogue(catalogue)}>Ver catálogo</button>
            </div>
          ))}
        </div>
      </section>
      {selectedCatalogue && <CatalogueViewer catalogue={selectedCatalogue} isOpen onClose={() => setSelectedCatalogue(null)} />}
    </>
  )
}
