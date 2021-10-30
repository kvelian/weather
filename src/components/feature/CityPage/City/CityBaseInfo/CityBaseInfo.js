import "./cityBaseInfo.scss"

export const CityBaseInfo = ({weatherIconStyle, cityName, temp}) => {
    return (
        <div className="CityBaseInfo container__column">
            <div className="CityBaseInfo_cityName container__row">
                <div className="icon__m location__filled"/>
                <label className="label"> {cityName} </label>
            </div>
            <div className="CityBaseInfo_weather container__row">
                <div className={"icon__l " + weatherIconStyle}/>
                <div className="CityBaseInfo_weather_temp container__row">
                    <label className="CityBaseInfo_weather_temp_label label__shadow"> {temp}</label>
                    <label> °C</label>
                </div>
            </div>
        </div>
    )
}