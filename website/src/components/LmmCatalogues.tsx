import { catalogues } from '../data/catalogues'
import CatalogueBanner from './CatalogueBanner'

const entries = [
  { title: 'Catálogo Cadeiras', catalogue: catalogues.cadeirasLmm },
  { title: 'Catálogo Cadeiras de Escritório', catalogue: catalogues.cadeirasEscritorioLmm },
  { title: 'Catálogo Bancos Bar', catalogue: catalogues.bancosBarLmm },
  { title: 'Catálogo Consolas', catalogue: catalogues.consolasLmm },
  { title: 'Catálogo Mesas', catalogue: catalogues.mesasLmm },
  { title: 'Catálogo Mesas de Centro', catalogue: catalogues.mesasCentroLmm },
]

export default function LmmCatalogues({ photo }: { photo: string }) {
  return (
    <CatalogueBanner
      id="lmm-catalogues"
      brandName="LMM"
      photo={photo}
      photoAlt="Mesa de vidro Fontana com cadeiras pretas LMM numa cozinha luminosa"
      className="lmm-page__banner lmm-page__catalogues"
      entries={entries}
      layout="three-columns"
    />
  )
}
