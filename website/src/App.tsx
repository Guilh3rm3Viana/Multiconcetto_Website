import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RepresentadasPage from './pages/RepresentadasPage'
import ArkimueblePage from './pages/ArkimueblePage'
import RomeroPage from './pages/RomeroPage'
import ExportjunkPage from './pages/ExportjunkPage'
import RocoPage from './pages/RocoPage'
import NardiPage from './pages/NardiPage'
import EzpeletaPage from './pages/EzpeletaPage'
import LmmPage from './pages/LmmPage'
import CatalogosPage from './pages/CatalogosPage'
import ContactosPage from './pages/ContactosPage'
import BrandDetailPendingPage from './pages/BrandDetailPendingPage'
import { representedBrands } from './data/representedBrands'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const pendingBrand = representedBrands.find((brand) => brand.detailPath === path)

  useEffect(() => {
    document.title = path === '/representadas/arkimueble'
      ? 'Arkimueble | Multiconcetto'
      : pendingBrand
      ? `${pendingBrand.name} | Multiconcetto`
      : path === '/quem-somos'
        ? 'Quem Somos | Multiconcetto'
        : path === '/catalogos'
          ? 'Catálogos | Multiconcetto'
        : path === '/contactos'
          ? 'Contactos | Multiconcetto'
        : path === '/representadas'
          ? 'Representadas e Parceiros | Multiconcetto'
          : 'Multiconcetto | In & Outdoor Living'
  }, [path, pendingBrand])

  if (path === '/quem-somos') return <AboutPage />
  if (path === '/representadas') return <RepresentadasPage />
  if (path === '/catalogos') return <CatalogosPage />
  if (path === '/contactos') return <ContactosPage />
  if (path === '/representadas/arkimueble') return <ArkimueblePage />
  if (path === '/representadas/romero') return <RomeroPage />
  if (path === '/representadas/exportjunc') return <ExportjunkPage />
  if (path === '/representadas/roco') return <RocoPage />
  if (path === '/representadas/nardi') return <NardiPage />
  if (path === '/representadas/ezpeleta') return <EzpeletaPage />
  if (path === '/representadas/lmm') return <LmmPage />
  if (pendingBrand) return <BrandDetailPendingPage brand={pendingBrand} />
  return <HomePage />
}

export default App
