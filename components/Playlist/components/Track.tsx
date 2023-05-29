import { toIntlDate } from "@helpers/intl-date";
import { IPlaylist } from "@types";

const Track: React.FC<IPlaylist> = ({ name, url, date }) => {
  const dateFormatted = toIntlDate(date)

  return (
    <div className="flex flex-col items-center py-4 justify-center w-full h-full ">
      <a
        className="hover:transition-all ease-linear text-center hover:underline hover:text-blue-400 text-lg md:text-3lg xl:2xl text-secondary font-primary"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
      <p className="text-center pt-1 text-lg text-secondary font-secondary">{dateFormatted}</p>
    </div>
  )
}

export default Track;
