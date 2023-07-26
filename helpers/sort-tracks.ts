import { IPlaylist } from "@types"

export const sortSongs = (tracks: IPlaylist[]) => {
  if (!tracks) return []

  const mostRecentTracksFirst = tracks.sort((a: IPlaylist, b: IPlaylist) =>  Number(b.year) - Number(a.year))
  
  return mostRecentTracksFirst
}
