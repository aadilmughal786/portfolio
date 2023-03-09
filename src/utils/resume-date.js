//  return fromated string in terms of year and month
const formateDate = dateObj => {
  let year = dateObj.getFullYear()
  let month = dateObj.toLocaleString("en-us", { month: "short" })

  return `${month} ${year}`
}

// return current date object
const getCurrentDateObject = () => {
  return new Date()
}

// convert days into years and month
const getYearsAndMonthsFromDays = days => {
  const YEAR = 365,
    MONTH = 30

  let years, months

  years = days >= YEAR ? Math.floor(days / YEAR) : 0

  days = years ? days - years * YEAR : days

  months = days >= MONTH ? Math.floor((days % YEAR) / MONTH) : 0

  if (days > 0) months += 1
  if (months > 11) {
    months = 0
    years += 1
  }

  years = years == 0 ? "" : years == 1 ? `one year` : `${years} years`
  months = months == 0 ? "" : months == 1 ? `one month` : `${months} months`

  return `${years} ${months}`
}

//  return difference of dates in terms of years and months
const getDiff = (first, second) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24

  // Discard the time and time-zone information.
  const utc1 = Date.UTC(first.getFullYear(), first.getMonth())
  const utc2 = Date.UTC(second.getFullYear(), second.getMonth())

  let days = Math.floor((utc2 - utc1) / _MS_PER_DAY)
  return getYearsAndMonthsFromDays(days)
}

export { formateDate, getCurrentDateObject, getDiff }
