import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IShow } from "@types";

export const ShowCard = ({ show, local, date }: IShow) => {
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
