import dayjs from "dayjs";
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

export const getDateFormattedByTz = (tz, mask) => {
    return dayjs().tz(tz).format(mask)
}

export const getDateFormattedByEpoch = (epoch, tz, mask) => {
    return dayjs(dayjs.unix(epoch)).tz(tz).format(mask)
}

export const isNowChecker = (epoch, tz, mask) => {
    return dayjs().tz(tz).format(mask) === dayjs(dayjs.unix(epoch)).tz(tz).format(mask)
}