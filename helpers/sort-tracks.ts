import { IPlaylist } from "@types"
import { dateStringToIsoDate } from "./iso-date"

export const sortTracks = (tracks: IPlaylist[]) => {
  if (!tracks) return []

  const mostRecentTracksFirst = tracks.sort((songA: IPlaylist, songB: IPlaylist) => {
    const isoDateA = dateStringToIsoDate(songA.date)
    const isoDateB = dateStringToIsoDate(songB.date)

    if (!isoDateA || !isoDateB) {
      return 0
    }

    const trackA = new Date(isoDateA).getTime()
    const trackB = new Date(isoDateB).getTime()
    return trackB - trackA
  })

  return mostRecentTracksFirst
}
