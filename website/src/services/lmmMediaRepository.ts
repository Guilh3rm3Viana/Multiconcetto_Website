import hero from '../../../Fotos/LMM/Living.jpg'
import logo from '../../../Fotos/LMM/Logo.jpg'
import introduction from '../../../Fotos/LMM/Smart V.jpg'
import catalogue from '../../../Fotos/LMM/Fontana.jpg'
import chairs from '../../../Fotos/LMM/Izan.jpg'
import barStools from '../../../Fotos/LMM/Cotton.jpg'
import officialSite from '../../../Fotos/LMM/Smart.jpg'
import tables from '../../../Fotos/LMM/Mesas.jpg'
import officeChairs from '../../../Fotos/LMM/Cadeiras Escritório.jpg'
import footer from '../../../Fotos/LMM/Fundo.jpg'

export type LmmMedia = {
  hero: string
  logo: string
  introduction: string
  catalogue: string
  officialSite: string
  footer: string
  categories: {
    chairs: string
    barStools: string
    tables: string
    officeChairs: string
  }
}

export async function getLmmMedia(): Promise<LmmMedia> {
  return {
    hero,
    logo,
    introduction,
    catalogue,
    officialSite,
    footer,
    categories: { chairs, barStools, tables, officeChairs },
  }
}
