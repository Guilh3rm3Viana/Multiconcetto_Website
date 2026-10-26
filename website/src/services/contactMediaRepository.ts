import hero from '../../../Fotos/Contactos/Rattan Contctos.jpg'
import map from '../../../Fotos/Contactos/Maps.jpg'
import building from '../../../Fotos/Contactos/20260915_164750.jpg'
import footer from '../../../Fotos/Contactos/Fundo Contactos.jpg'

export type ContactMedia = {
  hero: string
  map: string
  building: string
  footer: string
}

export async function getContactMedia(): Promise<ContactMedia> {
  return { hero, map, building, footer }
}
