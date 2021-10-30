import dayjs from "dayjs";
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

export const getTimeFormatted = (tz) => {
    return dayjs().tz(tz).format('hha')
}

export const getDayFormatted = (tz) => {
    return dayjs().tz(tz).format('D MMM, dd')
}