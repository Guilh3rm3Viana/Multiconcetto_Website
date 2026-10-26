import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import './ImageStrip.css'

export type ImageStripItem = { label: string; image: string }

type Props = { title: string; items: ImageStripItem[]; id?: string }

export default function ImageStrip({ title, items, id }: Props) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section ref={ref} id={id} className={`image-strip ${isVisible ? 'scroll-reveal-group--visible' : ''}`} aria-label={title}>
      <h2 className="visually-hidden">{title}</h2>
      <div className="image-strip__grid" style={{ '--tile-count': items.length } as React.CSSProperties}>
        {items.map(({ label, image }, index) => (
          <div className="image-strip__tile scroll-reveal" key={label} style={{ '--reveal-delay': `${index * 120}ms` } as React.CSSProperties}>
            <img src={image} alt={label} loading="lazy" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
