import {getDayFormatted, getTimeFormatted} from "../../../../../../utils/getDateFormatted";
import {useEffect, useState} from "react";

import "./cityItemCard.scss"

export const CityItemCard = ({name, tz, temp, weatherIconStyle, backgroundStyle, handleClick}) => {
    const [time, setTime] = useState(getTimeFormatted(tz))

    useEffect(() => {
        const interval = setInterval(
            () => setTime(getTimeFormatted(tz)),
            10000
        );
        return () => {
            clearInterval(interval);
        }
    }, []);


    return (
        <div className= {"CityItem_Card container__row " + backgroundStyle}
             onClick={handleClick}>
            <div className="container__column">
                <div className="CityItem_Card_city container__row">
                    <div className="icon__s location"/>
                    <label className="label"> {name}</label>
                </div>
                <label className="CityItem_Card_label__temp label__shadow"> {temp}° C</label>
                <div className="CityItem_Card_date container__row">
                    <div className="icon__s time"/>
                    <label className="label"> {time}</label>
                    <div className="icon__s calendar"/>
                    <label className="label"> {getDayFormatted(tz)}</label>
                </div>
            </div>
            <div className={"weather " + weatherIconStyle}/>
        </div>
    )
}