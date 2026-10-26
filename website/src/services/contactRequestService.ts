export type ContactRequest = {
  name: string
  email: string
  phone: string
  message: string
}

export type ContactRequestResult = { status: 'unavailable' | 'sent' }

// Futuro ponto de ligação ao backend: POST /api/contact com estes quatro campos.
// O backend valida os dados e chama o Resend; a chave nunca fica no frontend.
// Por agora, não transmite, guarda ou regista os dados, nem simula um envio.
export async function submitContactRequest(request: ContactRequest): Promise<ContactRequestResult> {
  void request
  return { status: 'unavailable' }
}
