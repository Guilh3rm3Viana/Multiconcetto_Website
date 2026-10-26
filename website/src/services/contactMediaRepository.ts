import hero from '../../../Fotos/Otimizadas/Contactos/Rattan Contctos.jpg.webp'
import map from '../../../Fotos/Contactos/Maps.jpg'
import building from '../../../Fotos/Otimizadas/Contactos/20260915_164750.jpg.webp'
import footer from '../../../Fotos/Otimizadas/Contactos/Fundo Contactos.jpg.webp'

export type ContactMedia = {
  hero: string
  map: string
  building: string
  footer: string
}

export async function getContactMedia(): Promise<ContactMedia> {
  return { hero, map, building, footer }
}
