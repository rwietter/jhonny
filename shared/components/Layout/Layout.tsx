import Link from 'next/link';
import { type FC, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const AdminLayout: FC<Props> = ({ children }) => {
  return (
    <main className="w-full min-h-screen bg-slate-50">
      <header className='static top-0 bg-slate-50 shadow-zinc-200 shadow-md h-14 p-4 flex justify-center w-full'>
        <Link
          href="/admin/music"
          className='text-slate-700 transition-colors font-bold text-xl hover:text-slate-900'
        >
          Música
        </Link>
        <Link
          href="/admin/show"
          className='text-slate-700 transition-colors font-bold text-xl hover:text-slate-900 pl-6'
        >
          Show
        </Link>
      </header>
      <section className='grid lg:grid-cols-2 relative pb-12'>
        {children}
      </section>
    </main>
  )
}

export { AdminLayout };
