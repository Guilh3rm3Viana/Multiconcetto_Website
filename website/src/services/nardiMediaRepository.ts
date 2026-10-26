import hero from '../../../Fotos/Nardi/NARDI 6.png'
import introduction from '../../../Fotos/Nardi/NARDI 7.jpg'
import catalogue from '../../../Fotos/Nardi/NARDI 4.jpg'
import tablesAndChairs from '../../../Fotos/Nardi/NARDI 5.jpg'
import sofas from '../../../Fotos/Nardi/NARDI 3.jpg'
import officialSite from '../../../Fotos/Nardi/NARDI 1.jpg'
import lounge from '../../../Fotos/Nardi/NARDI 2.png'
import restaurants from '../../../Fotos/Nardi/NARDI 9.jpg'
import footer from '../../../Fotos/Nardi/NARDI 8.jpg'

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
