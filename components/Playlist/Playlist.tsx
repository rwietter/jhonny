import { IPlaylist } from "@types";
import Track from "./components/Track";

interface PlaylistProps {
  playlist: string
}

const Playlist = ({ playlist }: PlaylistProps) => {
  const tracks: IPlaylist[] = JSON.parse(playlist)

  if (!tracks) return null

  return (
    <section className='h-auto lg:h-[40rem] relative w-full bg-primary py-6 pb-32 lg:pb-6 px-3 md:px-8 lg:px-16'>
      <h1 className="text-center text-6xl xl:text-7xl text-secondary font-bold font-primary">Músicas</h1>
      <div className="w-full pt-10 flex flex-col items-center ">
        {tracks.map((track, index) => (
          <Track
            key={index}
            name={track.name}
            url={track.url}
            date={track.date} />
        ))}
      </div>
    </section>
  )
}

export { Playlist };
