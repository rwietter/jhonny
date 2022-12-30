import { useState } from "react"

export const useVideo = () => {
  const [play, setPlay] = useState(false);

  const toggleVideo = () => {
    const video = document.getElementById("jhonny") as HTMLVideoElement;
    const playButton = document.getElementById("playButton") as HTMLButtonElement;
    const decoration = document.querySelector(".decoration") as HTMLDivElement;

    if (!video || !playButton) return;

    if (video.paused) {
      video.play();
      setPlay(true);
      decoration.classList.add("active");
    } else {
      video.pause();
      setPlay(false);
      decoration.classList.remove("active");
    }
  };

  return { play, toggleVideo };
}