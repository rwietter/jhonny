const TITLE = 'Shows'
const DESCRIPTION = 'Nenhum show agendado :('

export const NoShowScheduled = (): JSX.Element => (
  <section className='h-auto lg:h-[40rem] relative w-full bg-primary py-6 pb-32 lg:pb-6 px-3 md:px-8 lg:px-16'>
    <h1 className="text-center text-7xl text-secondary font-bold font-primary">{TITLE}</h1>
    <div className="w-full pt-10 flex flex-col items-center">
      <p className="text-center text-2xl font-normal text-secondary">{DESCRIPTION}</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="mt-4 w-full max-w-[6rem] lg:max-w-[10rem]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 5h9a2 2 0 0 1 2 2v9m-.184 3.839a2 2 0 0 1 -1.816 1.161h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 1.158 -1.815" />
        <path d="M16 3v4" />
        <path d="M8 3v1" />
        <path d="M4 11h7m4 0h5" />
        <path d="M3 3l18 18" />
      </svg>
    </div>
  </section>
)
