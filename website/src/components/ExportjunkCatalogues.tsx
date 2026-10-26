import { catalogues } from '../data/catalogues'
import CatalogueBanner from './CatalogueBanner'

const entries = [
  { title: 'Catálogo Exportjunk', catalogue: catalogues.exportjunk2024 },
  { title: 'Catálogo Exportjunk Novidades', catalogue: catalogues.exportjunk2026 },
]

export default function ExportjunkCatalogues({ photo }: { photo: string }) {
  return (
    <CatalogueBanner
      id="exportjunk-catalogues"
      brandName="Exportjunk"
      photo={photo}
      photoAlt="Mesa e cadeiras de madeira Exportjunk num terraço com vista para as montanhas"
      className="exportjunk-page__banner"
      entries={entries}
    />
  )
}
