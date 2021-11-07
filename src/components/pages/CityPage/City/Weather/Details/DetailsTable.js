import {DetailsItem, DetailsItemWind} from "./DetailsItem";

import "./Details.scss"

export const DetailsNow = ({current}) => {
    return (
        <div
            className="WeatherDetails_table container__column container__glass border-gradient border-gradient-grey">
            <div className="WeatherDetails_table_item container__row">
                <label className="text text__light">Now</label>
                <span className="text__light text__white text__shadow">{current.condition.text}</span>
            </div>
            <DetailsItemWind windDir={current.wind_degree} value={current.wind_kph + " km/h"}/>
            <hr className="line line__white"/>
            <DetailsItem icon={"cloud"} name={"Cloud"} value={current.cloud + " %"}/>
            <hr className="line line__white"/>
            <DetailsItem icon={"pressure"} name={"Pressure"} value={current.pressure_mb + " mbar"}/>
        </div>
    )
}

export const DetailsByDay = ({day}) => {
    return (
        <div
            className="WeatherDetails_table container__column container__glass border-gradient border-gradient-grey">
            <div className="WeatherDetails_table_item container__row">
                <label className="text text__light">By day</label>
                <span className="text__light text__white text__shadow">{day.condition.text}</span>
            </div>
            <DetailsItem icon={"humidity"} name={"Humidity"} value={day.avghumidity + " %"}/>
            <hr className="line line__white"/>
            <DetailsItem icon={"uv"} name={"UV Index"} value={day.uv + "/10"}/>
            <hr className="line line__white"/>
            <DetailsItem icon={"rain"} name={"Chance of rain"} value={day.daily_chance_of_rain + " %"}/>
            <hr className="line line__white"/>
            <DetailsItem icon={"snow"} name={"Chance of snow"} value={day.daily_chance_of_snow + " %"}/>
        </div>
    )
}