import hero from '../../../Fotos/Romero/ROMERO 5.png'
import logo from '../../../Fotos/Representadas_Parceiros/Logo Romero White.png'
import introduction from '../../../Fotos/Romero/ROMERO 1.png'
import catalogue from '../../../Fotos/Romero/ROMERO 4.png'
import restaurants from '../../../Fotos/Romero/ROMERO 6.png'
import catering from '../../../Fotos/Romero/ROMERO 3.png'
import officialSite from '../../../Fotos/Romero/ROMERO 2.png'
import outdoor from '../../../Fotos/Romero/Exterior.jpg'
import footer from '../../../Fotos/Romero/Fundo Romero.jpg'

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
