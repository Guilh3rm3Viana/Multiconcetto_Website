import hero from '../../../Fotos/Catálogos/Catalogo topo.jpg'
import footer from '../../../Fotos/Catálogos/Roco Catálogos.jpg'

export type CatalogueMedia = {
  hero: string
  footer: string
}

export async function getCatalogueMedia(): Promise<CatalogueMedia> {
  return { hero, footer }
}
