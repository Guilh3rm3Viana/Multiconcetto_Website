import { useState } from 'react'
import CatalogueViewer from '../components/CatalogueViewer'
import SiteLayout from '../components/SiteLayout'
import { catalogues, type Catalogue } from '../data/catalogues'
import { useCatalogueMedia } from '../hooks/useCatalogueMedia'
import './CatalogosPage.css'

type CatalogueId = keyof typeof catalogues
type CatalogueItem = { id: CatalogueId; label: string }

const catalogueItems: CatalogueItem[] = [
  { id: 'arkimueble', label: 'Arkimueble' },
  { id: 'romero', label: 'Romero' },
  { id: 'exportjunk2024', label: 'Exportjunk' },
  { id: 'exportjunk2026', label: 'Exportjunk Novidades' },
  { id: 'roco', label: 'Roco' },
  { id: 'ezpeletaContract', label: 'Ezpeleta' },
  { id: 'nardiContract', label: 'Nardi Contract' },
  { id: 'nardiOutdoor', label: 'Nardi Outdoor' },
  { id: 'nardiSunday', label: 'Nardi Sunday' },
  { id: 'modesto', label: 'Modesto Navarro' },
  { id: 'modestoAmpliacao', label: 'Modesto Navarro Novidades' },
  { id: 'cadeirasLmm', label: 'LMM Cadeiras' },
  { id: 'cadeirasEscritorioLmm', label: 'LMM Cadeiras Escritório' },
  { id: 'bancosBarLmm', label: 'LMM Bancos Bar' },
  { id: 'mesasLmm', label: 'LMM Mesas' },
  { id: 'mesasCentroLmm', label: 'LMM Mesas de Centro' },
  { id: 'consolasLmm', label: 'LMM Consolas' },
]

function CatalogueCard({ item, onOpen }: { item: CatalogueItem; onOpen: (catalogue: Catalogue) => void }) {
  const catalogue = catalogues[item.id]

  return (
    <li className="catalogos-page__item">
      <button type="button" onClick={() => onOpen(catalogue)} aria-label={`Ver catálogo ${catalogue.name}`}>
        <span className="catalogos-page__cover">
          {catalogue.cover ? <img src={catalogue.cover} alt="" loading="lazy" /> : <span>Sem capa</span>}
        </span>
        <span className="catalogos-page__label">{item.label}</span>
      </button>
    </li>
  )
}

export default function CatalogosPage() {
  const media = useCatalogueMedia()
  const [activeCatalogue, setActiveCatalogue] = useState<Catalogue | null>(null)

  if (!media) return <div aria-busy="true" aria-label="A carregar catálogos" />

  return (
    <SiteLayout footerPhoto={media.footer}>
      <main className="catalogos-page">
        <section id="inicio" className="catalogos-page__hero" aria-labelledby="catalogos-title">
          <img src={media.hero} alt="Conjunto de sofás e mesa de exterior" fetchPriority="high" />
          <h1 id="catalogos-title" className="visually-hidden">Catálogos</h1>
        </section>

        <section className="catalogos-page__collection" aria-label="Catálogos das marcas">
          <ul className="catalogos-page__grid">
            {catalogueItems.map((item) => <CatalogueCard key={item.id} item={item} onOpen={setActiveCatalogue} />)}
          </ul>
        </section>

        {activeCatalogue && <CatalogueViewer catalogue={activeCatalogue} isOpen onClose={() => setActiveCatalogue(null)} />}
      </main>
    </SiteLayout>
  )
}
