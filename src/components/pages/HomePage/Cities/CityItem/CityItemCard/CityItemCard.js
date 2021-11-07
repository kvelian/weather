import {useEffect, useState} from "react";

import {getDateFormattedByTz} from "../../../../../../utils/helpers/getDateFormatted";
import {SpanWithIcon} from "../../../../../common/text/Span";

import "./cityItemCard.scss"

export const CityItemCard = ({name, tz, temp, weatherIconStyle, backgroundStyle, openCity}) => {
    const maskTime = 'hha'
    const maskDate = 'D MMM, dd'
    const [time, setTime] = useState(getDateFormattedByTz(tz, maskTime))

    useEffect((tz) => {
        const interval = setInterval(
            () => setTime(getDateFormattedByTz(tz, maskTime)),
            10000
        );
        return () => {
            clearInterval(interval);
        }
    }, []);


    return (
        <div className= {"CityItem_Card shadow cursor__pointer container__row " + backgroundStyle}
             onClick={openCity}>
            <div className="container__column">
                <SpanWithIcon className={"CityItem_Card_city"} icon={"location"} value={name}/>
                <span className="CityItem_Card_temp text__white text__shadow"> {temp}° C</span>
                <div className="CityItem_Card_date container__row">
                    <SpanWithIcon className={"CityItem_Card_date_item"} icon={"time"} value={time}/>
                    <SpanWithIcon className={"CityItem_Card_date_item"} icon={"calendar"} value={getDateFormattedByTz(tz, maskDate)}/>
                </div>
            </div>
            <div className={"icon_weather " + weatherIconStyle}/>
        </div>
    )
}