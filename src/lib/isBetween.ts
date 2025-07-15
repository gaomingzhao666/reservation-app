export const isNowBetweenDates = (startDateStr: string, endDateStr: string): boolean => {
  // Create Date objects for start and end dates.
  const startDate = new Date(startDateStr)
  const endDate = new Date(endDateStr)

  // Get the current date and time.
  const now = new Date()

  // Check if current date is on or after startDate and on or before endDate.
  return now >= startDate && now <= endDate
}

export const isNowBetweenTimes = (startTimeStr: string, endTimeStr: string): boolean => {
  // Get the current local time.
  const now = new Date()
  const currentTotalMinutes = now.getHours() * 60 + now.getMinutes()

  // Convert start time (e.g., "9:00") to total minutes.
  const [startHour, startMinute] = startTimeStr.split(':').map(Number)
  const startTotalMinutes = startHour * 60 + startMinute

  // Convert end time (e.g., "18:00") to total minutes.
  const [endHour, endMinute] = endTimeStr.split(':').map(Number)
  const endTotalMinutes = endHour * 60 + endMinute

  // Check if the current time is between the start and end times.
  return currentTotalMinutes >= startTotalMinutes && currentTotalMinutes <= endTotalMinutes
}
