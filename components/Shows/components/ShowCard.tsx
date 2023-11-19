import { IShow } from "types/shows";

export const ShowCard = ({ attributes }: Pick<IShow, 'attributes'>) => {
  const dateFormatted = Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(new Date(attributes.data));

  const mapsUrl = `https://maps.google.com/?q=${attributes.latitude},${attributes.longitude}`;

  return (
    <section className="show-card-container px-2 my-4 w-full max-w-3xl">
      <div
        className={`show-card flex items-start text-secondary rounded-md justify-items-start justify-center flex-col bg-primary w-full my-1 p-8 font-primary`}
      >
        <a
          href={mapsUrl}
          className="text-xl font-extrabold text-start max-w-[50%]"
          target="_blank"
          rel="noreferrer nofollow"
        >
          {attributes.local}
        </a>
        <p className="font-inter text-xl pt-4 text-center">
          {dateFormatted && `${dateFormatted}h`}
        </p>
      </div>
      <a className="map"
        href={mapsUrl}
        target="_blank"
        rel="noreferrer nofollow"
      />
      <div className="show-card-bg" />
    </section>
  );
}
