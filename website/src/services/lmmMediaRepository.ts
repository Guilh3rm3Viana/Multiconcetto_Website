import hero from '../../../Fotos/Otimizadas/LMM/Living.jpg.webp'
import logo from '../../../Fotos/LMM/Logo.jpg'
import introduction from '../../../Fotos/Otimizadas/LMM/Smart V.jpg.webp'
import catalogue from '../../../Fotos/Otimizadas/LMM/Fontana.jpg.webp'
import chairs from '../../../Fotos/Otimizadas/LMM/Izan.jpg.webp'
import barStools from '../../../Fotos/Otimizadas/LMM/Cotton.jpg.webp'
import officialSite from '../../../Fotos/Otimizadas/LMM/Smart.jpg.webp'
import tables from '../../../Fotos/Otimizadas/LMM/Mesas.jpg.webp'
import officeChairs from '../../../Fotos/Otimizadas/LMM/Cadeiras Escritório.jpg.webp'
import footer from '../../../Fotos/Otimizadas/LMM/Fundo.jpg.webp'

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
