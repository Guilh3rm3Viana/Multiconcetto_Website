import { catalogues } from '../data/catalogues'
import CatalogueBanner from './CatalogueBanner'

const entries = [
  { title: 'Catálogo Nardi Contract', catalogue: catalogues.nardiContract },
  { title: 'Catálogo Nardi Outdoor', catalogue: catalogues.nardiOutdoor },
  { title: 'Catálogo Nardi Sunday', catalogue: catalogues.nardiSunday },
]

export default function NardiCatalogues({ photo }: { photo: string }) {
  return (
    <CatalogueBanner
      id="nardi-catalogues"
      brandName="Nardi"
      photo={photo}
      photoAlt="Sofás e cadeirões Nardi junto à piscina de uma casa de pedra"
      className="nardi-page__banner"
      entries={entries}
    />
  )
}
