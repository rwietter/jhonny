import { ShowCard } from './components';
import { IShow } from '@types'
import { useEffect, useState } from 'react';


export const Shows = () => {
  const [shows, setShows] = useState<IShow[]>([]);

 const fetchShows = async () => {
   const data = await fetch("/api/performance");
   return await data.json();
 };

  useEffect(() => {
    fetchShows().then((data) => {
      setShows(data);
    });
  }, []);

  return (
    <section className='h-auto lg:h-auto relative w-full bg-primary py-6 pb-24 lg:pb-36 px-3 md:px-8 lg:px-16'>
      <h1 className="text-center text-6xl xl:text-7xl text-secondary font-bold font-primary">Shows</h1>
      <div className="w-full pt-10 flex flex-col items-center">
        {shows.map((show, index) => (
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
