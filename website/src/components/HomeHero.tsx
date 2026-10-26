import { useEffect, useState } from 'react'
import './HomeHero.css'

type Props = { images: string[] }

export default function HomeHero({ images }: Props) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (images.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setActive((current) => (current + 1) % images.length), 6500)
    return () => window.clearInterval(timer)
  }, [images])

  return (
    <section id="inicio" className="home-hero" aria-label="Multiconcetto — mobiliário para viver dentro e fora de casa">
      {images.map((src, index) => (
        <img
          key={src}
          className={`home-hero__image ${active === index ? 'home-hero__image--active' : ''}`}
          src={src}
          alt=""
          fetchPriority={index === 0 ? 'high' : 'auto'}
          aria-hidden={active !== index}
        />
      ))}
      <div className="home-hero__shade" />
      <div className="home-hero__caption">
        <span className="home-hero__line" />
        <p>In &amp; Outdoor Living</p>
      </div>
      <div className="home-hero__controls" aria-label="Escolher fotografia">
        {images.map((_, index) => (
          <button key={index} type="button" className={active === index ? 'is-active' : ''} aria-label={`Mostrar fotografia ${index + 1}`} aria-pressed={active === index} onClick={() => setActive(index)} />
        ))}
      </div>
    </section>
  )
}
