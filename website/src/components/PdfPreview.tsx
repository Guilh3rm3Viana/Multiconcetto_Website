import { useEffect, useRef, useState } from 'react'
import type { PDFDocumentProxy } from 'pdfjs-dist'
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import { PdfBinaryDataFactory } from '../services/pdfBinaryDataFactory'
import './PdfPreview.css'

type Props = { pdf: string; cover: string | null; name: string }

export default function PdfPreview({ pdf, cover, name }: Props) {
  const [document, setDocument] = useState<PDFDocumentProxy | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [zoom, setZoom] = useState(1)
  const [width, setWidth] = useState(0)
  const [error, setError] = useState('')
  const pageContainerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let active = true
    let destroy: (() => void) | undefined

    async function loadPdf() {
      try {
        const { getDocument, GlobalWorkerOptions } = await import('pdfjs-dist')
        if (!active) return
        GlobalWorkerOptions.workerSrc = workerUrl
        const loadingTask = getDocument({ url: pdf, BinaryDataFactory: PdfBinaryDataFactory, useWorkerFetch: false })
        destroy = () => { void loadingTask.destroy() }
        const loadedDocument = await loadingTask.promise
        if (active) setDocument(loadedDocument)
      } catch {
        if (active) setError('Não foi possível carregar o catálogo. Pode abri-lo noutra janela.')
      }
    }

    void loadPdf()
    return () => { active = false; destroy?.() }
  }, [pdf])

  useEffect(() => {
    const container = pageContainerRef.current
    if (!container) return
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!document || !width || !canvasRef.current) return
    let active = true
    let cancelRender: (() => void) | undefined

    async function renderPage() {
      try {
        const page = await document!.getPage(pageNumber)
        if (!active || !canvasRef.current) return
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        if (!context) throw new Error('Canvas indisponível')
        const base = page.getViewport({ scale: 1 })
        const viewport = page.getViewport({ scale: (Math.min(width - 48, 950) / base.width) * zoom })
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
        canvas.width = Math.floor(viewport.width * pixelRatio)
        canvas.height = Math.floor(viewport.height * pixelRatio)
        canvas.style.width = `${viewport.width}px`
        canvas.style.height = `${viewport.height}px`
        const renderTask = page.render({
          canvas,
          canvasContext: context,
          viewport,
          transform: [pixelRatio, 0, 0, pixelRatio, 0, 0],
        })
        cancelRender = () => renderTask.cancel()
        await renderTask.promise
      } catch (reason) {
        if (active && !(reason instanceof Error && reason.name === 'RenderingCancelledException')) {
          setError('Não foi possível mostrar esta página. Pode abrir o catálogo noutra janela.')
        }
      }
    }

    void renderPage()
    return () => { active = false; cancelRender?.() }
  }, [document, pageNumber, width, zoom])

  const pageCount = document?.numPages ?? 0

  return (
    <div className="pdf-preview">
      <aside className="pdf-preview__sidebar" aria-label="Capa do catálogo">
        {cover && <button type="button" onClick={() => setPageNumber(1)} aria-label="Ir para a capa"><img src={cover} alt={`Capa de ${name}`} /></button>}
        {pageCount > 0 && <span>{pageCount} páginas</span>}
      </aside>
      <div className="pdf-preview__main">
        <div className="pdf-preview__toolbar" aria-label="Controlos do visualizador">
          <button type="button" onClick={() => setPageNumber((page) => Math.max(1, page - 1))} disabled={pageNumber <= 1 || !document} aria-label="Página anterior">‹</button>
          <label><span className="visually-hidden">Número da página</span><input type="number" min="1" max={pageCount || undefined} value={pageNumber} onChange={(event) => {
            const nextPage = Number(event.target.value)
            if (nextPage >= 1 && nextPage <= pageCount) setPageNumber(nextPage)
          }} /></label>
          <span>/ {pageCount || '…'}</span>
          <button type="button" onClick={() => setPageNumber((page) => Math.min(pageCount, page + 1))} disabled={pageNumber >= pageCount || !document} aria-label="Página seguinte">›</button>
          <span className="pdf-preview__toolbar-spacer" />
          <button type="button" onClick={() => setZoom((value) => Math.max(.6, value - .2))} disabled={!document || zoom <= .6} aria-label="Diminuir zoom">−</button>
          <span>{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom((value) => Math.min(2, value + .2))} disabled={!document || zoom >= 2} aria-label="Aumentar zoom">+</button>
        </div>
        <div ref={pageContainerRef} className="pdf-preview__page">
          {error ? <p role="alert">{error}</p> : !document ? <p role="status">A carregar catálogo…</p> : <canvas ref={canvasRef} aria-label={`Página ${pageNumber} de ${pageCount} do catálogo ${name}`} />}
        </div>
      </div>
    </div>
  )
}
