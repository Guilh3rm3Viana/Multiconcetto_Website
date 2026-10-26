import hero from '../../../Fotos/Otimizadas/Roco/ROMERO 6.png.webp'
import logo from '../../../Fotos/Roco/Logo.jpg'
import introduction from '../../../Fotos/Otimizadas/Roco/Introducao.jpg.webp'
import catalogue from '../../../Fotos/Otimizadas/Roco/ROMERO 5.png.webp'
import hotels from '../../../Fotos/Otimizadas/Roco/foto-hoteles.jpg.webp'
import restaurants from '../../../Fotos/Otimizadas/Roco/foto-restauracion.jpg.webp'
import officialSite from '../../../Fotos/Otimizadas/Romero/ROMERO 2.png.webp'
import lobbies from '../../../Fotos/Otimizadas/Roco/foto-lobbies.jpg.webp'
import outdoor from '../../../Fotos/Otimizadas/Roco/foto-exterior.jpg.webp'
import footer from '../../../Fotos/Otimizadas/Roco/hero-portada.jpg.webp'

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
