import SiteLayout from '../components/SiteLayout'
import { useAboutMedia } from '../hooks/useAboutMedia'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import './AboutPage.css'

function AboutContent({ team, mission, afterSales }: { team: string; mission: string; afterSales: string }) {
  const { ref: introRef, isVisible: introVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: missionRef, isVisible: missionVisible } = useRevealOnScroll<HTMLElement>()
  const { ref: serviceRef, isVisible: serviceVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <main className="about-page">
      <section ref={introRef} id="quem-somos" className={`about-page__section about-page__intro ${introVisible ? 'scroll-reveal-group--visible' : ''}`} aria-labelledby="about-title">
        <div className="about-page__copy scroll-reveal">
          <h1 id="about-title">Quem Somos</h1>
          <p>Criada em 2015 com base na experiência de mais de 20 anos dos seus sócios neste mercado, a Multiconcetto pretende oferecer soluções variadas e de qualidade aos seus clientes.</p>
          <p>Representa e mantém parcerias com diversas marcas de mobiliário de exterior e interior. Dedica-se ao comércio por grosso e trabalha com lojas de decoração, gabinetes de arquitetura e decoradoras em todo o país.</p>
        </div>
        <img className="about-page__team scroll-reveal scroll-reveal--delay-1" src={team} alt="Equipa da Multiconcetto reunida" fetchPriority="high" />
      </section>

      <section ref={missionRef} className={`about-page__section about-page__mission ${missionVisible ? 'scroll-reveal-group--visible' : ''}`} aria-labelledby="mission-title">
        <img className="about-page__mission-image scroll-reveal" src={mission} alt="Cadeira de madeira num espaço interior" loading="lazy" />
        <div className="about-page__copy scroll-reveal scroll-reveal--delay-1">
          <h2 id="mission-title">Missão</h2>
          <p>Colocar ao dispor dos clientes mobiliário de qualidade que permita melhorar o design dos seus espaços, bem como o seu bem-estar.</p>
        </div>
      </section>

      <section ref={serviceRef} className={`about-page__section about-page__service ${serviceVisible ? 'scroll-reveal-group--visible' : ''}`} aria-labelledby="service-title">
        <div className="about-page__copy scroll-reveal">
          <h2 id="service-title">Serviço Pós-Venda</h2>
          <p>Acreditamos que a relação com os nossos clientes não se esgota com a venda.</p>
        </div>
        <img className="about-page__service-image scroll-reveal scroll-reveal--delay-1" src={afterSales} alt="Cadeira de escritório cinzenta" loading="lazy" />
      </section>
    </main>
  )
}

export default function AboutPage() {
  const media = useAboutMedia()

  if (!media) return <div aria-busy="true" aria-label="A carregar página Quem Somos" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <AboutContent team={media.team} mission={media.mission} afterSales={media.afterSales} />
    </SiteLayout>
  )
}
