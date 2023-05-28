import { useState } from "react"
import { author } from "../../static/author"
import { Contact } from "../Contact"

const sendMail = async ({ setSending, closeModal, emailPayload }: SendEmailProps) => {
  try {
    setSending(true)
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: emailPayload,
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error('Erro ao enviar mensagem! Tente novamente mais tarde.')
    }

    alert('Mensagem enviada com sucesso!')
    closeModal()
  } catch (error) {
    alert('Erro ao enviar mensagem! Tente novamente mais tarde.')
  } finally {
    setSending(false)
  }
}

type SendEmailProps = {
  setSending: (value: boolean) => void
  closeModal: () => void
  emailPayload: string
}

// RAFACTOR: in a hook
export const Baseboard = () => {
  const [isOpen, setOpen] = useState(false)
  const [isSending, setSending] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, message, name } = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    if (!email.value || !message.value || !name.value) {
      alert('Preencha todos os campos!')
      return
    }

    const emailPayload = JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value
    })

    sendMail({ setSending, closeModal, emailPayload })
  }

  return (
    <section className="baseboard">
      <nav className='info'>
        <button className="contact" onClick={() => openModal()} type="button">Contato</button>
      </nav>
      <div className="separator">
        <div></div>
      </div>
      <nav className='social'>
        {
          author.media.map((social) => (
            <a key={social.type} href={social.url} target="_blank" rel="noreferrer">
              {social.icon()}
            </a>
          ))
        }
      </nav>
      <Contact isOpen={isOpen} closeModal={closeModal} title="Contato">
        <div className="modal__body">
          <form onSubmit={handleContactSubmit} className="modal__contact">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Seu nome" />
            <label htmlFor="email" placeholder="seuemail@mail.com">E-mail</label>
            <input type="email" id="email" />
            <label htmlFor="message" placeholder="Sua mensagem">Mensagem</label>
            <textarea id="message" />
            <button type="submit" disabled={isSending}>Enviar</button>
          </form>
        </div>
      </Contact>
    </section>
  )
}
