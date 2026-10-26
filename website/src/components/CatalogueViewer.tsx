import { useEffect, useRef } from 'react'
import type { Catalogue } from '../data/catalogues'
import PdfPreview from './PdfPreview'
import './CatalogueViewer.css'

type Props = {
  catalogue: Catalogue
  isOpen: boolean
  onClose: () => void
}

export default function CatalogueViewer({ catalogue, isOpen, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      className="catalogue-viewer"
      aria-label={`Visualizar ${catalogue.name}`}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
    >
      <div className="catalogue-viewer__panel">
        <header className="catalogue-viewer__header">
          <h2>{catalogue.name}</h2>
          <div className="catalogue-viewer__actions">
            <button className="catalogue-viewer__back" type="button" onClick={() => dialogRef.current?.close()}>← Voltar ao site</button>
            <a href={catalogue.pdf} target="_blank" rel="noopener noreferrer">Abrir noutra janela</a>
            <a href={catalogue.pdf} download>Descarregar</a>
            <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Fechar visualizador">×</button>
          </div>
        </header>
        {isOpen && <PdfPreview pdf={catalogue.pdf} cover={catalogue.cover} name={catalogue.name} />}
      </div>
    </dialog>
  )
}
