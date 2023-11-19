import { IPlaylist } from "types/playlist";
import { BiLogoSpotify, BiLogoYoutube } from "react-icons/bi";

const Track: React.FC<IPlaylist> = (props) => {
  return (
    <div className="flex flex-col items-center py-2 justify-center w-full h-full">
      <section className="flex items-center justify-center">
        <a
          className="hover:transition-all ease-linear text-center hover:underline hover:text-blue-400 text-lg md:text-3lg xl:2xl text-secondary font-primary"
          href={props.attributes.spotify}
          target="_blank"
          rel="noreferrer"
        >
          {props.attributes.nome}
        </a>
        <span className="text-white px-2"> — </span>
        <div className="space-x-1 flex items-center cursor-pointer">
          <a href={props.attributes.youtube} target="_blank" rel="noreferrer">
            <BiLogoYoutube size={25} color="#DB1B2A" />
          </a>
          <a href={props.attributes.spotify} target="_blank" rel="noreferrer">
            <BiLogoSpotify size={22} color="#1DB954" />
          </a>
        </div>
      </section>
    </div>
  );
};
export { Track };
