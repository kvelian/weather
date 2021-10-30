import "./cityWeatherDetails.scss"

const TableItem = ({icon, name, value}) => {
    return (
        <div className="CityWeatherDetails_table_item container__row">
            <div className="container__row">
                <div className={"icon__m " + icon}/>
                <label className="label label__white">{name}</label>
            </div>
            <label className="label label__light">{value}</label>
        </div>
    )
}

const TableNow = ({current}) => {
    const windDir = {
        transform: `rotate(${current.wind_degree}deg)`
    };

    return (
        <div
            className="CityWeatherDetails_table container__column container__glass border-gradient border-gradient-grey">
            <div className="CityWeatherDetails_table_item container__row">
                <label className="label label__light">Now</label>
                <label className="label__light label__white label__shadow">{current.condition.text}</label>
            </div>
            <TableItem icon={"temp"} name={"Feels like"} value={current.feelslike_c + " °C"}/>
            <hr className="line line__white"/>
            <div className="CityWeatherDetails_table_item container__row">
                <div className="container__row">
                    <div className="icon__m wind" />
                    <label className="label label__white">Wind</label>
                </div>
                <div className="container__row">
                    <div style={windDir} className="icon__m windDir" id="windDir"/>
                    <label className="label label__light">{current.wind_kph + " km/h"}</label>
                </div>
            </div>
            <hr className="line line__white"/>
            <TableItem icon={"cloud"} name={"Cloud"} value={current.cloud + " %"}/>
            <hr className="line line__white"/>
            <TableItem icon={"pressure"} name={"Pressure"} value={current.pressure_mb + " mbar"}/>
        </div>
    )
}

const TableByDay = ({day}) => {
    return (
        <div
            className="CityWeatherDetails_table container__column container__glass border-gradient border-gradient-grey">
            <div className="CityWeatherDetails_table_item container__row">
                <label className="label label__light">By day</label>
                <label className="label__light label__white label__shadow">{day.condition.text}</label>
            </div>
            <TableItem icon={"humidity"} name={"Humidity"} value={day.avghumidity + " %"}/>
            <hr className="line line__white"/>
            <TableItem icon={"uv"} name={"UV Index"} value={day.uv + "/10"}/>
            <hr className="line line__white"/>
            <TableItem icon={"rain"} name={"Chance of rain"} value={day.daily_chance_of_rain + " %"}/>
            <hr className="line line__white"/>
            <TableItem icon={"snow"} name={"Chance of snow"} value={day.daily_chance_of_snow + " %"}/>
        </div>
    )
}

export const CityWeatherDetails = ({current, forecast, alerts}) => {
    const day = forecast.forecastday[0].day
    return (
        <div className="CityWeatherDetailsContainer container__row">
            <TableNow current={current}/>
            <TableByDay day={day}/>
        </div>
    )
}