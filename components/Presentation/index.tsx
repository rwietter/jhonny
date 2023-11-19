import { motion as m } from "framer-motion";
import { useVideo } from "@hooks/useVideo";
import { Baseboard } from "@components/Baseboard";
import { draw } from "./motion";
import { useEffect, useState } from "react";

export const Presentation = () => {
  const { toggleVideo, play } = useVideo();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <section className="presentation">
        <section className="figure">
          <div className='gradient radial-gradient'></div>
          <div className='gradient gradient-1'></div>
          <div className='gradient gradient-2'></div>
          {isClient && (
            <video id="jhonny" autoPlay={false} loop muted={false} preload="auto" poster="video-thumb.png">
              <source src="Camisa-Manchada.mp4" type="video/mp4" />
            </video>
          )}
          <div className='play' onClick={toggleVideo}>
            <m.button id="playButton">
              {!play ? (
                <m.svg
                  initial="hidden"
                  animate="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <m.path variants={draw} stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <m.path variants={draw} d="M7 4v16l13 -8z" />
                </m.svg>
              ) : null}
              {play ? (
                <m.svg
                  initial="hidden"
                  animate="visible"
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <m.path variants={draw} stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <m.rect variants={draw} x="6" y="5" width="4" height="14" rx="1" />
                  <m.rect variants={draw} x="14" y="5" width="4" height="14" rx="1" />
                </m.svg>
              ) : null}
            </m.button>
          </div>
          <div className='content'>
            <h1>Jhonny Santanna</h1>
            <p>Cantor & Compositor</p>
          </div>
        </section>

      </section>
      <Baseboard />
    </>
  )
}
