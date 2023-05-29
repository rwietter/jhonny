import { dateStringToIsoDate } from "./iso-date"

export const toIntlDate = (date: string) => {
  const isoDate = dateStringToIsoDate(date)

  if (!isoDate) return date

  const intlDate = Intl.DateTimeFormat('BR', { calendar: 'gregory', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
  return intlDate.format(isoDate)
}
