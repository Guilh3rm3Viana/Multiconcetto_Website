import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import './AboutSection.css'

export default function AboutSection({ photo }: { photo: string }) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <section ref={ref} id="quem-somos" className={`about-section ${isVisible ? 'scroll-reveal-group--visible' : ''}`}>
      <div className="about-section__inner">
        <div className="about-section__copy scroll-reveal">
          <h2>A Multiconcetto</h2>
          <p>Criada em 2015 com base na experiência de mais de 20 anos que os seus sócios têm neste mercado, a Multiconcetto pretende oferecer soluções de qualidade e variadas aos seus clientes.</p>
          <a className="about-section__link" href="/quem-somos">Conheça-nos <span aria-hidden="true">↗</span></a>
        </div>
        <img className="about-section__image scroll-reveal scroll-reveal--delay-1" src={photo} alt="Os dois sócios da Multiconcetto" loading="lazy" />
      </div>
    </section>
  )
}
