

import data from './data'

type GroupedByDayEntry = {
  accum: number,
  count: number,
  average: number
} 

const groupedByDay: Record<string, GroupedByDayEntry> = {}


const convertTimestampToDateString = (timestamp: number) => {
  const date = new Date(timestamp)
  const day = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}
// O(m * n)

for (let dataEntry of data) {
  const stringDate = convertTimestampToDateString(dataEntry.timestamp)
  if(!groupedByDay[stringDate]){
    groupedByDay[stringDate] = {
      accum: 0,
      count: 0,
      average: 0,
    }
  }
  groupedByDay[stringDate].accum += dataEntry.value
  groupedByDay[stringDate].count++
}

// Calculate the averages after processing all data entries
for (const dateString in groupedByDay) {
  const entry = groupedByDay[dateString];
  if (entry.count > 0) {
    entry.average = entry.accum / entry.count;
  }
}