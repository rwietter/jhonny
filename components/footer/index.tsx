import Link from "next/link"
import { useState } from "react"
import { author } from "../../static/author"
import { Modal } from "../modal"

export const Footer = () => {
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

    try {
      setSending(true)
      fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(() => {
        alert('Mensagem enviada com sucesso!')
        closeModal()
      }).catch(() => {
        alert('Erro ao enviar mensagem!')
      }).finally(() => {
        setSending(false)
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <footer>
      <nav className='info'>
        <Link href="/music">Música</Link>
        <Link href="/event">Eventos</Link>
        <button className="contact" onClick={() => openModal()} type="button">Contato</button>
      </nav>
      <div className="separator">
        <div></div>
      </div>
      <nav className='social'>
        {
          author.media.map((item, index) => (
            <a key={item.type} href={item.url} target="_blank" rel="noreferrer">
              {item.icon()}
            </a>
          ))
        }
      </nav>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Contato">
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
      </Modal>
    </footer>
  )
}