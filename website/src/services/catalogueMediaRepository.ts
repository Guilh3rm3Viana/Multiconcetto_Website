import hero from '../../../Fotos/Otimizadas/Catálogos/Catalogo topo.jpg.webp'
import footer from '../../../Fotos/Otimizadas/Catálogos/Roco Catálogos.jpg.webp'

export type CatalogueMedia = {
  hero: string
  footer: string
}

export async function getCatalogueMedia(): Promise<CatalogueMedia> {
  return { hero, footer }
}
