import {getStyleWeatherIcon} from "../../../../../utils/helpers/getComponentStyle";

import {BaseInfo} from "./BaseInfo/BaseInfo";
import {DetailsByDay, DetailsNow} from "./Details/DetailsTable";

import "./Weather.scss"

export const WeatherContainer = ({current, cityName, selectedDay}) => {
    const isToday = current.last_updated.includes(selectedDay.date)
    const feelsLikeTemp = isToday ? current.feelslike_c : ""
    const {day, temp, precip, cloud} = isToday ? {day: current.is_day, temp: current.temp_c, precip: current.precip_mm, cloud: current.cloud} : {day: true, temp: selectedDay.day.avgtemp_c, precip: selectedDay.day.totalprecip_mm, cloud: 0}
    const weatherIconStyle = getStyleWeatherIcon(day, temp, precip, cloud)

    return (
        <div className="CityWeatherContainer container__column">
            <BaseInfo weatherIconStyle={weatherIconStyle} cityName={cityName} temp={temp} feelsLikeTemp={feelsLikeTemp}/>
            <div className="WeatherDetailsContainer container__row">
                {isToday && (<DetailsNow current={current}/>)}
                <DetailsByDay day={selectedDay.day}/>
            </div>
        </div>
    )
}