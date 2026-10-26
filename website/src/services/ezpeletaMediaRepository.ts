import hero from '../../../Fotos/Ezpeleta/ezpeleta_2.png'
import logo from '../../../Fotos/Representadas_Parceiros/Logo Ezpeleta.jpg'
import introduction from '../../../Fotos/Ezpeleta/ezpeleta_1.png'
import catalogue from '../../../Fotos/Ezpeleta/ezpeleta_5.png'
import tablesAndChairs from '../../../Fotos/Ezpeleta/ezpeleta_4.png'
import lounge from '../../../Fotos/Ezpeleta/HotelMinho1.jpg'
import officialSite from '../../../Fotos/Ezpeleta/ezpeleta_7.jpg'
import parasols from '../../../Fotos/Ezpeleta/ezpeleta_3.png'
import dividers from '../../../Fotos/Ezpeleta/ezpeleta_6.jpg'
import footer from '../../../Fotos/Ezpeleta/Fundo Página.jpg'

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
