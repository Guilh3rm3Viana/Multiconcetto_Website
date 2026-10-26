// Atualize aqui os ficheiros e as capas quando chegarem novos catálogos.
import arkimueblePdf from '../../../Catalogos/Arkimueble Outdoor Essence 2026.pdf?url'
import arkimuebleCover from '../../../Catalogos/Capas/Capa Arkimueble Outdoor Essence 202601-01.jpg?url'
import bancosBarPdf from '../../../Catalogos/Bancos Bar LMM 2026.pdf?url'
import bancosBarCover from '../../../Catalogos/Capas/Capa LMM Bancos Bar.jpg?url'
import cadeirasEscritorioPdf from '../../../Catalogos/Cadeiras Escritório LMM 2026.pdf?url'
import cadeirasEscritorioCover from '../../../Catalogos/Capas/Capa LMM Cadeiras Escritório.jpg?url'
import cadeirasPdf from '../../../Catalogos/Cadeiras LMM 2026.pdf?url'
import cadeirasCover from '../../../Catalogos/Capas/Capa LMM Cadeiras.jpg?url'
import exportjunk2024Pdf from '../../../Catalogos/Catálogo EXPORTJUNK 2024.pdf?url'
import exportjunk2024Cover from '../../../Catalogos/Capas/Capa Catálogo EXPORTJUNK 202401-01.jpg?url'
import exportjunk2026Pdf from '../../../Catalogos/Catálogo EXPORTJUNK 2026.pdf?url'
import exportjunk2026Cover from '../../../Catalogos/Capas/Capa Catálogo EXPORTJUNK 202601-01.jpg?url'
import ezpeletaPdf from '../../../Catalogos/Catalogo EZPELETA CONTRACT 2026.pdf?url'
import ezpeletaCover from '../../../Catalogos/Capas/Capa Catalogo EZPELETA CONTRACT 202601-01.jpg?url'
import modestoAmpliacaoPdf from '../../../Catalogos/Catálogo MODESTO NAVARRO Ampliação 2025.pdf?url'
import modestoAmpliacaoCover from '../../../Catalogos/Capas/Capa Modesto Navarro Novidades.jpg?url'
import modestoPdf from '../../../Catalogos/Catalogo Modesto Navarro.pdf?url'
import modestoCover from '../../../Fotos/Catálogos/Capa Modesto Navarro.jpg?url'
import nardiContractPdf from '../../../Catalogos/Catalogo NARDI CONTRACT 2027_compressed.pdf?url'
import nardiContractCover from '../../../Catalogos/Capas/Capa Nardi Contract 2027.jpg?url'
import nardiOutdoorPdf from '../../../Catalogos/Catalogo NARDI OUTDOOR 2027_compressed.pdf?url'
import nardiOutdoorCover from '../../../Catalogos/Capas/Capa Nardi Outdoor 2027.jpg?url'
import nardiSundayPdf from '../../../Catalogos/Catalogo NARDI SUNDAY 2027.pdf?url'
import nardiSundayCover from '../../../Catalogos/Capas/Capa Nardi Sunday 2027.jpg?url'
import rocoPdf from '../../../Catalogos/Catalogo ROCO 2025_26.pdf?url'
import rocoCover from '../../../Catalogos/Capas/Capa Catalogo ROCO 2025_2601-01.jpg?url'
import romeroPdf from '../../../Catalogos/Catalogo Romero Export 2026.pdf?url'
import romeroCover from '../../../Catalogos/Capas/Capa Catalogo Romero Export 202601-01.jpg?url'
import consolasPdf from '../../../Catalogos/Consolas LMM 2026.pdf?url'
import consolasCover from '../../../Catalogos/Capas/Capa LMM Consolas.jpg?url'
import mesasCentroPdf from '../../../Catalogos/Mesas de Centro LMM 2026.pdf?url'
import mesasCentroCover from '../../../Catalogos/Capas/Capa LMM Mesas Centro.jpg?url'
import mesasPdf from '../../../Catalogos/Mesas LMM 2026.pdf?url'
import mesasCover from '../../../Catalogos/Capas/Capa LMM Mesas.jpg?url'

export type Catalogue = {
  name: string
  pdf: string
  cover: string | null
}

export const catalogues = {
  arkimueble: { name: 'Arkimueble Outdoor Essence 2026', pdf: arkimueblePdf, cover: arkimuebleCover },
  bancosBarLmm: { name: 'LMM Bancos Bar 2026', pdf: bancosBarPdf, cover: bancosBarCover },
  cadeirasEscritorioLmm: { name: 'LMM Cadeiras Escritório 2026', pdf: cadeirasEscritorioPdf, cover: cadeirasEscritorioCover },
  cadeirasLmm: { name: 'LMM Cadeiras 2026', pdf: cadeirasPdf, cover: cadeirasCover },
  exportjunk2024: { name: 'Exportjunk 2024', pdf: exportjunk2024Pdf, cover: exportjunk2024Cover },
  exportjunk2026: { name: 'Exportjunk Novidades', pdf: exportjunk2026Pdf, cover: exportjunk2026Cover },
  ezpeletaContract: { name: 'Ezpeleta Contract 2026', pdf: ezpeletaPdf, cover: ezpeletaCover },
  modestoAmpliacao: { name: 'Modesto Navarro Novidades', pdf: modestoAmpliacaoPdf, cover: modestoAmpliacaoCover },
  modesto: { name: 'Modesto Navarro', pdf: modestoPdf, cover: modestoCover },
  nardiContract: { name: 'Nardi Contract 2027', pdf: nardiContractPdf, cover: nardiContractCover },
  nardiOutdoor: { name: 'Nardi Outdoor 2027', pdf: nardiOutdoorPdf, cover: nardiOutdoorCover },
  nardiSunday: { name: 'Nardi Sunday 2027', pdf: nardiSundayPdf, cover: nardiSundayCover },
  roco: { name: 'Roco 2025/26', pdf: rocoPdf, cover: rocoCover },
  romero: { name: 'Romero Export 2026', pdf: romeroPdf, cover: romeroCover },
  consolasLmm: { name: 'LMM Consolas 2026', pdf: consolasPdf, cover: consolasCover },
  mesasCentroLmm: { name: 'LMM Mesas de Centro 2026', pdf: mesasCentroPdf, cover: mesasCentroCover },
  mesasLmm: { name: 'LMM Mesas 2026', pdf: mesasPdf, cover: mesasCover },
} as const satisfies Record<string, Catalogue>
