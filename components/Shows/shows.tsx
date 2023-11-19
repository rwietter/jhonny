import { ShowCard } from "./components";
import { IShow } from "types/shows";

type ShowsProps = {
  shows: IShow[];
}

export const Shows = (props: ShowsProps) => {
  if (!props.shows) return (
    <p className="text-secondary bg-primary text-center p-8">
      Ocorreu um erro ao carregar Músicas :(
    </p>
  );

  return (
    <section className="h-auto lg:h-auto relative w-full bg-primary py-6 pb-24 lg:pb-36 px-3 md:px-8 lg:px-16">
      <h1 className="text-center text-6xl xl:text-7xl text-secondary font-bold font-primary">
        Shows
      </h1>
      <div className="w-full pt-10 flex flex-col items-center">
        {props.shows.map((show) => (
          <ShowCard
            key={show.attributes.createdAt}
            attributes={show.attributes}
          />
        ))}
      </div>
    </section>
  );
};
