import type { FormEvent } from 'react'
import { navigation } from '../data/navigation'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import './SiteFooter.css'

type Props = { photo: string }

export default function SiteFooter({ photo }: Props) {
  const { ref: photoRef, isVisible: photoVisible } = useRevealOnScroll<HTMLDivElement>()
  const { ref: contentRef, isVisible: contentVisible } = useRevealOnScroll<HTMLDivElement>()

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = String(new FormData(event.currentTarget).get('email') ?? '').trim()
    if (!email) return
    const subject = encodeURIComponent('Subscrição da newsletter Multiconcetto')
    const body = encodeURIComponent(`Gostaria de subscrever a newsletter com o endereço ${email}.`)
    window.location.href = `mailto:info@multiconcetto.pt?subject=${subject}&body=${body}`
  }

  return (
    <footer id="contactos" className="site-footer">
      <div ref={photoRef} className={photoVisible ? 'scroll-reveal-group--visible' : ''}>
        <img className="site-footer__photo scroll-reveal" src={photo} alt="Conjunto de mobiliário de exterior" loading="lazy" />
      </div>
      <div ref={contentRef} className={`site-footer__content ${contentVisible ? 'scroll-reveal-group--visible' : ''}`}>
        <div className="scroll-reveal">
          <h2>Navegação</h2>
          <nav aria-label="Navegação do rodapé">
            {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </nav>
        </div>
        <div className="scroll-reveal" style={{ '--reveal-delay': '.16s' } as React.CSSProperties}>
          <h2>Contactos</h2>
          <address>
            <a href="tel:+351212470221">(+351) 212 470 221</a>
            <a href="mailto:info@multiconcetto.pt">info@multiconcetto.pt</a>
            <span>Rua Liebig, 24<br />Bairro de Santa Bárbara<br />2830-141 Barreiro</span>
          </address>
        </div>
        <div className="site-footer__newsletter scroll-reveal" style={{ '--reveal-delay': '.32s' } as React.CSSProperties}>
          <h2>Newsletter</h2>
          <p>Subscreva a nossa Newsletter e fique a par de todas as novidades</p>
          <form onSubmit={handleSubscribe}>
            <label className="visually-hidden" htmlFor="newsletter-email">Email para newsletter</label>
            <input id="newsletter-email" name="email" type="email" placeholder="O seu email" autoComplete="email" required />
            <button type="submit">Subscrever</button>
          </form>
          <small>A subscrição abre a sua aplicação de email.</small>
        </div>
      </div>
    </footer>
  )
}
