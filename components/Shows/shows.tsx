import { ShowCard } from "./components";
import { IShow } from "@types";
import { Suspense } from "react";
import useSWR from "swr";

const fetcher = (url: string): Promise<IShow[]> =>
  fetch(url).then((r) => r.json());

export const Shows = () => {
  const { data, error } = useSWR("/api/performance", fetcher);

  if (typeof data === "undefined") return null;

  if (error || typeof data === "undefined")
    return (
      <p className="text-secondary bg-primary text-center p-8">
        Ocorreu um erro ao carregar Músicas :(
      </p>
    );

  return (
    <section className="h-auto lg:h-auto relative w-full bg-primary py-6 pb-24 lg:pb-36 px-3 md:px-8 lg:px-16">
      <h1 className="text-center text-6xl xl:text-7xl text-secondary font-bold font-primary">
        Shows
      </h1>
      <Suspense
        fallback={
          <p className="text-secondary bg-primary text-center p-8">
            Loading...
          </p>
        }
      >
        <div className="w-full pt-10 flex flex-col items-center">
          {data.map((show, index) => (
            <ShowCard
              key={index}
              show={show.show}
              local={show.local}
              date={show.date}
            />
          ))}
        </div>
      </Suspense>
    </section>
  );
};
