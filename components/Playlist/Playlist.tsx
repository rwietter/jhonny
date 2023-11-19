import { IPlaylist } from "types/playlist";
import { Track } from "./components/Track";

type PlaylistProps = {
  songs: IPlaylist[];
}

const Playlist = (props: PlaylistProps) => {
  return (
    <section className="h-auto lg:h-[40rem] relative w-full bg-primary py-6 pb-32 lg:pb-6 px-3 md:px-8 lg:px-16">
      <h1 className="text-center text-6xl xl:text-7xl text-secondary font-bold font-primary">
        Músicas
      </h1>
      <div className="w-full pt-10 flex flex-col items-center">
        {props.songs.map((track) => (
          <Track
            key={track.attributes.nome}
            attributes={track.attributes}
          />
        ))}
      </div>
    </section>
  );
};

export { Playlist };
