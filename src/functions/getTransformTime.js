import { add } from 'date-fns'
const getPadTime = (time) => time.toString().padStart(2, '0')
export const timeStart = (date) => {
  const hours = getPadTime(new Date(date).getHours())
  const minutes = getPadTime(new Date(date).getMinutes())

  return `${hours}:${minutes}`
}

export const timeEnd = (date, durationValue) => {
  const addDate = add(new Date(date), { minutes: durationValue })
  const hours = getPadTime(new Date(addDate).getHours())
  const minutes = getPadTime(new Date(addDate).getMinutes())

  return `${hours}:${minutes}`
}

export const timeFlight = (durationValue) => {
  const time = `${durationValue < 24 * 60 ? Math.floor(durationValue / 60) : Math.floor((durationValue / 60) % 24)}ч ${
    durationValue % 60
  }м`

  return durationValue >= 60 * 24 ? `${Math.floor(durationValue / (60 * 24))}д ${time}` : time
}
