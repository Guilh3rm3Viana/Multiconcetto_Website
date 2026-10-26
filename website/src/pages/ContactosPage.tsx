import ContactRequestForm from '../components/ContactRequestForm'
import SiteLayout from '../components/SiteLayout'
import { useContactMedia } from '../hooks/useContactMedia'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import type { ContactMedia } from '../services/contactMediaRepository'
import './ContactosPage.css'

function ContactContent({ media }: { media: ContactMedia }) {
  const { ref: locationRef, isVisible: locationVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: requestRef, isVisible: requestVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <main className="contactos-page">
      <section className="contactos-page__hero" aria-label="Contactos">
        <img src={media.hero} alt="Sofás e poltronas em rattan num terraço" fetchPriority="high" />
      </section>
      <h1 className="contactos-page__title">Fale Connosco</h1>

      <section ref={locationRef} className={`contactos-page__section contactos-page__location ${locationVisible ? 'scroll-reveal-group--visible' : ''}`} aria-labelledby="contact-location-title">
        <a className="contactos-page__map scroll-reveal" href="https://www.google.com/maps/search/?api=1&query=Rua+Liebig+24%2C+2830-141+Barreiro" target="_blank" rel="noopener noreferrer" aria-label="Ver a localização da Multiconcetto no Google Maps (abre numa nova janela)">
          <img src={media.map} alt="Mapa da zona da Rua Liebig, no Barreiro, com a localização da Multiconcetto assinalada" loading="lazy" />
        </a>
        <div className="contactos-page__details scroll-reveal scroll-reveal--delay-1">
          <h2 id="contact-location-title">Onde Estamos?</h2>
          <address>
            <p>Rua Liebig, 24<br />Bairro de Santa Bárbara<br />2830-141 Barreiro</p>
            <p>Tlf: <a href="tel:+351212470221">(+351) 212 470 221</a></p>
            <p>Email: <a href="mailto:info@multiconcetto.pt">info@multiconcetto.pt</a></p>
          </address>
        </div>
      </section>

      <section ref={requestRef} className={`contactos-page__section contactos-page__request ${requestVisible ? 'scroll-reveal-group--visible' : ''}`} aria-labelledby="contact-request-title">
        <div className="scroll-reveal"><ContactRequestForm /></div>
        <img className="contactos-page__building scroll-reveal scroll-reveal--delay-1" src={media.building} alt="Fachada da Multiconcetto na Rua Liebig, com porta e janela azuis" loading="lazy" />
      </section>
    </main>
  )
}

export default function ContactosPage() {
  const media = useContactMedia()

  if (!media) return <div aria-busy="true" aria-label="A carregar contactos" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <ContactContent media={media} />
    </SiteLayout>
  )
}
