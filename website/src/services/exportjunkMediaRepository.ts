import hero from '../../../Fotos/Otimizadas/Exportjunk/EXPORTJUNC 3.png.webp'
import logo from '../../../Fotos/Representadas_Parceiros/Logo Exportjunc.png'
import introduction from '../../../Fotos/Otimizadas/Exportjunk/EXPORTJUNC 11.png.webp'
import catalogue from '../../../Fotos/Otimizadas/Exportjunk/EXPORTJUNC 4.png.webp'
import tablesAndChairs from '../../../Fotos/Otimizadas/Exportjunk/EXPORTJUNC 8.png.webp'
import loungers from '../../../Fotos/Otimizadas/Exportjunk/EXPORTJUNC 15.png.webp'
import officialSite from '../../../Fotos/Otimizadas/Exportjunk/EXPORTJUNC 2.png.webp'
import sofas from '../../../Fotos/Otimizadas/Exportjunk/EXPORTJUNC 1.png.webp'
import daybeds from '../../../Fotos/Otimizadas/Exportjunk/EXPORTJUNC 6.png.webp'
import footer from '../../../Fotos/Otimizadas/Exportjunk/muebles-terraza-cabecera.jpg.webp'

export type ExportjunkMedia = {
  hero: string
  logo: string
  introduction: string
  catalogue: string
  officialSite: string
  footer: string
  categories: {
    tablesAndChairs: string
    loungers: string
    sofas: string
    daybeds: string
  }
}

export async function getExportjunkMedia(): Promise<ExportjunkMedia> {
  return {
    hero,
    logo,
    introduction,
    catalogue,
    officialSite,
    footer,
    categories: { tablesAndChairs, loungers, sofas, daybeds },
  }
}
