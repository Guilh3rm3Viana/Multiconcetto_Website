import hero from '../../../Fotos/Otimizadas/Romero/ROMERO 5.png.webp'
import logo from '../../../Fotos/Representadas_Parceiros/Logo Romero White.png'
import introduction from '../../../Fotos/Otimizadas/Romero/ROMERO 1.png.webp'
import catalogue from '../../../Fotos/Otimizadas/Romero/ROMERO 4.png.webp'
import restaurants from '../../../Fotos/Otimizadas/Romero/ROMERO 6.png.webp'
import catering from '../../../Fotos/Otimizadas/Romero/ROMERO 3.png.webp'
import officialSite from '../../../Fotos/Otimizadas/Romero/ROMERO 2.png.webp'
import outdoor from '../../../Fotos/Otimizadas/Romero/Exterior.jpg.webp'
import footer from '../../../Fotos/Otimizadas/Romero/Fundo Romero.jpg.webp'

export type RomeroMedia = {
  hero: string
  logo: string
  introduction: string
  catalogue: string
  officialSite: string
  footer: string
  categories: {
    restaurants: string
    catering: string
    outdoor: string
  }
}

export async function getRomeroMedia(): Promise<RomeroMedia> {
  return {
    hero,
    logo,
    introduction,
    catalogue,
    officialSite,
    footer,
    categories: { restaurants, catering, outdoor },
  }
}
