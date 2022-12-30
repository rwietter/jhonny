import Link from "next/link"
import { author } from "../../static/author"

export const Footer = () => (
  <footer>
    <nav className='info'>
      <Link href="/music">Música</Link>
      <Link href="/event">Eventos</Link>
      <Link href="/contact">Contato</Link>
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
  </footer>
)