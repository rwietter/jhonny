import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { isPast } from 'date-fns'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  shows: string;
}

type Show = {
  show: string;
  local: string;
  date: string;
}

const mapShows = (dataShows: Show[]) => {
  return dataShows.map((show) => {
    const date = show.date.split('/').reverse().join('-')

    const isPastDate = isPast(new Date(date).setDate(new Date(date).getDate() + 1))

    if (isPastDate) {
      return { ...show, date: "OLD_SHOW" }
    }

    return { ...show }
  }).filter((show) => show.date !== "OLD_SHOW")
}

export const Shows = ({ shows }: Props) => {
  const dataShows: Show[] = JSON.parse(shows)

  if (!dataShows.length) return null

  const futureShows = mapShows(dataShows)

  return (
    <section className='h-auto lg:h-screen relative w-full bg-primary py-6 pb-10 lg:pb-6 px-3 md:px-8 lg:px-16'>
      <h1 className="text-center text-7xl text-secondary font-bold font-primary">Shows</h1>
      <div className="w-full pt-10 flex flex-col items-center ">
        {futureShows.map((show, index) => (
          <ShowCard
            key={index}
            show={show.show}
            local={show.local}
            date={show.date} />
        ))}
      </div>
    </section>
  )
}

const ShowCard = ({ show, local, date }: Show) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slideElement = ref.current;

    gsap.from(slideElement, {
      x: '-100%',
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: slideElement,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
      },
    });
  }, []);

  return (
    <section ref={ref} className='show-card-container px-2 my-4 w-full max-w-3xl'>
      <div className={`show-card flex text-secondary rounded-md justify-items-center justify-center items-center flex-col bg-primary w-full my-1 p-10 font-primary`}>
        <h2 className="text-2xl font-extrabold text-center">{show}</h2>
        <p className='p-2 font-medium text-xl text-center'>{local}</p>
        <p className="font-thin font-strong text-xl text-center">{date}</p>
      </div>
      <div className="show-card-bg" />
    </section>
  )
}
