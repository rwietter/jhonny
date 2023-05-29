export const dateStringToIsoDate = (date: string) => {
  if (!date) return null

  const mask = /(\d{2})\/(\d{2})\/(\d{4})/
  const isCorrectDate = mask.test(date)

  if (!isCorrectDate) return null

  const [day, month, year] = date.split('/')
  const isoDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  return isoDate
}
