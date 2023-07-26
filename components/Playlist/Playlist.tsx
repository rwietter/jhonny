import { IPlaylist } from "@types";
import { Track } from "./components/Track";
import { Suspense } from "react";
import useSWR from "swr";
import { url } from "inspector";
import { sortSongs } from "@helpers/sort-tracks";

const fetcher = (url: string): Promise<IPlaylist[]> =>
  fetch(url).then((r) => r.json());

const Playlist = () => {
  const { data, error } = useSWR("/api/songs", fetcher);

  if (typeof data === "undefined") return null;

  if (error)
    return (
      <p className="text-secondary bg-primary text-center p-8">
        Ocorreu um erro ao carregar Músicas :(
      </p>
    );

  const sortedData = sortSongs(data);

  return (
    <section className="h-auto lg:h-[40rem] relative w-full bg-primary py-6 pb-32 lg:pb-6 px-3 md:px-8 lg:px-16">
      <h1 className="text-center text-6xl xl:text-7xl text-secondary font-bold font-primary">
        Músicas
      </h1>
      <Suspense
        fallback={
          <p className="text-secondary bg-primary text-center p-8">
            Loading...
          </p>
        }
      >
        <div className="w-full pt-10 flex flex-col items-center">
          {sortedData.map((track) => (
            <Track
              key={track.name}
              name={track.name}
              spotify={track.spotify}
              youtube={track.youtube}
              year={track.year}
            />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export { Playlist };
