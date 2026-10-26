import type { RepresentedBrand } from '../data/representedBrands'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import type { RepresentedMedia } from '../services/representedMediaRepository'
import './BrandShowcase.css'

type Props = {
  brand: RepresentedBrand
  media: RepresentedMedia['brands'][RepresentedBrand['slug']]
  priority: boolean
}

export default function BrandShowcase({ brand, media, priority }: Props) {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <section ref={ref} className={`brand-showcase brand-showcase--${brand.slug} ${isVisible ? 'brand-showcase--visible' : ''}`} aria-labelledby={`brand-${brand.slug}`}>
      <img className="brand-showcase__photo" src={media.photo} alt={brand.photoAlt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />
      <h2 className="visually-hidden" id={`brand-${brand.slug}`}>{brand.name}</h2>
      <img className={`brand-showcase__logo brand-showcase__logo--${brand.logoPlacement}`} src={media.logo} alt="" aria-hidden="true" />
      <a className="brand-showcase__link" href={brand.detailPath} aria-label={`Ir para ${brand.name}`}>
        <span>Ir</span><span aria-hidden="true">→</span>
      </a>
    </section>
  )
}
