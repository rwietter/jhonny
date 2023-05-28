import React from 'react';
import { author } from '../../static/author';

const Footer: React.FC = () => (
  <footer>
    <section className='bg-zinc-950 flex flex-col sm:flex-row justify-between items-center sm:px-3 md:px-10 lg:px-32 py-20'>
      <div>
        <h3 className='text-white font-sacramento text-4xl md:text-6xl pb-10 sm:pb-0'>Jhonny Santanna</h3>
      </div>
      <div className='h-full w-1 bg-secondary'></div>
      <nav className='flex social'>
        {
          author.media.map((social) => (
            <a
              key={social.type}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className='px-2'
            >
              {social.icon()}
            </a>
          ))
        }
      </nav>
    </section>

    <section className='w-full bg-primary'>
      <p className='text-center text-white py-5 font-secondary text-base'>Jhonny Santanna © {new Date().getFullYear()}. All rights reserved.</p>
    </section>
  </footer>

)

export { Footer };
