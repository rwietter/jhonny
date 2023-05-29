import { IShow } from "@types"
import { isPast } from "date-fns"

export const filterFutureShows = (dataShows: IShow[]) => {
  return dataShows.map((show) => {
    const date = show.date.split('/').reverse().join('-')

    const isPastDate = isPast(new Date(date).setDate(new Date(date).getDate() + 1))

    if (isPastDate) {
      return { ...show, date: "OLD_SHOW" }
    }

    return { ...show }
  }).filter((show) => show.date !== "OLD_SHOW")
}
