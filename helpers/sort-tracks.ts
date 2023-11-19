import { IPlaylist } from "types/playlist"

export const sortSongs = (tracks: IPlaylist[]) => {
  if (!tracks) return []

  const mostRecentTracksFirst = tracks.sort((a: IPlaylist, b: IPlaylist) => Number(b.attributes.createdAt) - Number(a.attributes.createdAt))

  return mostRecentTracksFirst
}
