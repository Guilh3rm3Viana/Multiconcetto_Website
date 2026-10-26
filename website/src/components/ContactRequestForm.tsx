import { useState, type FormEvent } from 'react'
import { submitContactRequest } from '../services/contactRequestService'
import './ContactRequestForm.css'

export default function ContactRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    const data = new FormData(form)
    const request = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
    }

    if (!request.name || !request.email || !request.message) {
      setFeedback('Preencha o nome, o email e o assunto antes de enviar.')
      return
    }

    setIsSubmitting(true)
    setFeedback('')
    try {
      const result = await submitContactRequest(request)
      if (result.status === 'sent') {
        setFeedback('O seu pedido foi enviado. Obrigado pelo contacto.')
        form.reset()
      } else {
        setFeedback('O envio de pedidos ainda não está disponível. Contacte-nos por email ou telefone.')
      }
    } catch {
      setFeedback('Não foi possível enviar o pedido. Tente novamente ou contacte-nos por email ou telefone.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-request" onSubmit={handleSubmit} aria-labelledby="contact-request-title" aria-busy={isSubmitting}>
      <h2 id="contact-request-title">Pedido de Informação</h2>
      <div className="contact-request__field">
        <label htmlFor="contact-name">Nome</label>
        <input id="contact-name" name="name" autoComplete="name" placeholder="O seu nome" maxLength={150} required />
      </div>
      <div className="contact-request__field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="O seu email" maxLength={254} required />
      </div>
      <div className="contact-request__field">
        <label htmlFor="contact-phone">Telefone <span>(opcional)</span></label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="O seu telefone" maxLength={40} />
      </div>
      <div className="contact-request__field">
        <label htmlFor="contact-message">Assunto</label>
        <textarea id="contact-message" name="message" placeholder="Como podemos ajudar?" rows={7} maxLength={5000} required />
      </div>
      <button className="contact-request__submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'A enviar…' : 'Enviar'}
      </button>
      <p className="contact-request__feedback" role="status">{feedback}</p>
    </form>
  )
}
