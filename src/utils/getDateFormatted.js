import dayjs from "dayjs";
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

export const getTimeFormatted = (epoch, tz) => {
    const date = dayjs.unix(epoch)
    return dayjs(date).tz(tz).format('hha')
}

export const getDayFormatted = (epoch, tz) => {
    const date = dayjs.unix(epoch)
    return dayjs(date).tz(tz).format('D MMM, dd')
}