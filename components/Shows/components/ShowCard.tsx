import { IShow } from "@types";

export const ShowCard = ({ show, local, date }: IShow) => {
  const dateFormatted = new Date(date).toLocaleDateString("pt-BR");

  return (
    <section className="show-card-container px-2 my-4 w-full max-w-3xl">
      <div
        className={`show-card flex text-secondary rounded-md justify-items-center justify-center items-center flex-col bg-primary w-full my-1 p-10 font-primary`}
      >
        <h2 className="text-2xl font-extrabold text-center">{show}</h2>
        <p className="p-2 font-medium text-xl text-center">{local}</p>
        <p className="font-thin font-strong text-xl text-center">
          {dateFormatted}
        </p>
      </div>
      <div className="show-card-bg" />
    </section>
  );
}
