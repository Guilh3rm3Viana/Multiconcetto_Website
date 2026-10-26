import hero from '../../../Fotos/Otimizadas/Ezpeleta/ezpeleta_2.png.webp'
import logo from '../../../Fotos/Representadas_Parceiros/Logo Ezpeleta.jpg'
import introduction from '../../../Fotos/Otimizadas/Ezpeleta/ezpeleta_1.png.webp'
import catalogue from '../../../Fotos/Otimizadas/Ezpeleta/ezpeleta_5.png.webp'
import tablesAndChairs from '../../../Fotos/Otimizadas/Ezpeleta/ezpeleta_4.png.webp'
import lounge from '../../../Fotos/Otimizadas/Ezpeleta/HotelMinho1.jpg.webp'
import officialSite from '../../../Fotos/Otimizadas/Ezpeleta/ezpeleta_7.jpg.webp'
import parasols from '../../../Fotos/Otimizadas/Ezpeleta/ezpeleta_3.png.webp'
import dividers from '../../../Fotos/Ezpeleta/ezpeleta_6.jpg'
import footer from '../../../Fotos/Otimizadas/Ezpeleta/Fundo Página.jpg.webp'

export type EzpeletaMedia = {
  hero: string
  logo: string
  introduction: string
  catalogue: string
  officialSite: string
  footer: string
  categories: {
    tablesAndChairs: string
    lounge: string
    parasols: string
    dividers: string
  }
}

export async function getEzpeletaMedia(): Promise<EzpeletaMedia> {
  return {
    hero,
    logo,
    introduction,
    catalogue,
    officialSite,
    footer,
    categories: { tablesAndChairs, lounge, parasols, dividers },
  }
}
