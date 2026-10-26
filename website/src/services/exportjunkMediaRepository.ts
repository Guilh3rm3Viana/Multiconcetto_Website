import hero from '../../../Fotos/Exportjunk/EXPORTJUNC 3.png'
import logo from '../../../Fotos/Representadas_Parceiros/Logo Exportjunc.png'
import introduction from '../../../Fotos/Exportjunk/EXPORTJUNC 11.png'
import catalogue from '../../../Fotos/Exportjunk/EXPORTJUNC 4.png'
import tablesAndChairs from '../../../Fotos/Exportjunk/EXPORTJUNC 8.png'
import loungers from '../../../Fotos/Exportjunk/EXPORTJUNC 15.png'
import officialSite from '../../../Fotos/Exportjunk/EXPORTJUNC 2.png'
import sofas from '../../../Fotos/Exportjunk/EXPORTJUNC 1.png'
import daybeds from '../../../Fotos/Exportjunk/EXPORTJUNC 6.png'
import footer from '../../../Fotos/Exportjunk/muebles-terraza-cabecera.jpg'

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
