import {getDateFormattedByEpoch, isNowChecker} from "../../../../../utils/helpers/getDateFormatted";

import "./ForecastHourList.scss"
import {useEffect} from "react";

const Hour = ({tz, hour}) => {
    const styleIcon = {
        backgroundImage: `url(${hour.condition.icon})`
    }

    const epoch = hour.time_epoch
    const isNow = isNowChecker(epoch, tz, 'DDHH')
    const time = getDateFormattedByEpoch(epoch, tz, 'HH:mm')

    const className = isNow ? "HourCard_item__selected " : "HourCard_item backgroundBorder "
    return (
        <div className={className + "container__row"}>
            <span className="HourCard_item_time text text__light">{time}</span>
            <span className="text text__light">{Math.round(hour.temp_c)}</span>
            <div style={styleIcon} className="HourCard_icon"/>
        </div>
    )
}

export const ForecastHourList = ({tz, selectedDayHours}) => {
    useEffect(() => {
        const selectedItem = document.getElementsByClassName("HourCard_item__selected")[0]
        selectedItem.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
    }, [])
    return (
        <div className="CityForecastHour container__glass border-gradient border-gradient-white container__column">
            {selectedDayHours && selectedDayHours.map((hour) => {
                return <Hour tz={tz} hour={hour}/>
            })}
        </div>
    )
}