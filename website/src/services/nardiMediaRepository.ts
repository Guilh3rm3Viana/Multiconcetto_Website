import hero from '../../../Fotos/Otimizadas/Nardi/NARDI 6.png.webp'
import introduction from '../../../Fotos/Otimizadas/Nardi/NARDI 7.jpg.webp'
import catalogue from '../../../Fotos/Otimizadas/Nardi/NARDI 4.jpg.webp'
import tablesAndChairs from '../../../Fotos/Otimizadas/Nardi/NARDI 5.jpg.webp'
import sofas from '../../../Fotos/Otimizadas/Nardi/NARDI 3.jpg.webp'
import officialSite from '../../../Fotos/Otimizadas/Nardi/NARDI 1.jpg.webp'
import lounge from '../../../Fotos/Otimizadas/Nardi/NARDI 2.png.webp'
import restaurants from '../../../Fotos/Otimizadas/Nardi/NARDI 9.jpg.webp'
import footer from '../../../Fotos/Otimizadas/Nardi/NARDI 8.jpg.webp'

export type NardiMedia = {
  hero: string
  introduction: string
  catalogue: string
  officialSite: string
  footer: string
  categories: {
    tablesAndChairs: string
    sofas: string
    lounge: string
    restaurants: string
  }
}

export async function getNardiMedia(): Promise<NardiMedia> {
  return {
    hero,
    introduction,
    catalogue,
    officialSite,
    footer,
    categories: { tablesAndChairs, sofas, lounge, restaurants },
  }
}
