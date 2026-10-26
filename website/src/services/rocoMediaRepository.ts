import hero from '../../../Fotos/Roco/ROMERO 6.png'
import logo from '../../../Fotos/Roco/Logo.jpg'
import introduction from '../../../Fotos/Roco/Introducao.jpg'
import catalogue from '../../../Fotos/Roco/ROMERO 5.png'
import hotels from '../../../Fotos/Roco/foto-hoteles.jpg'
import restaurants from '../../../Fotos/Roco/foto-restauracion.jpg'
import officialSite from '../../../Fotos/Romero/ROMERO 2.png'
import lobbies from '../../../Fotos/Roco/foto-lobbies.jpg'
import outdoor from '../../../Fotos/Roco/foto-exterior.jpg'
import footer from '../../../Fotos/Roco/hero-portada.jpg'

export type RocoMedia = {
  hero: string
  logo: string
  introduction: string
  catalogue: string
  officialSite: string
  footer: string
  categories: {
    hotels: string
    restaurants: string
    lobbies: string
    outdoor: string
  }
}

export async function getRocoMedia(): Promise<RocoMedia> {
  return {
    hero,
    logo,
    introduction,
    catalogue,
    officialSite,
    footer,
    categories: { hotels, restaurants, lobbies, outdoor },
  }
}
