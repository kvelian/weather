import {LabelWithIcon} from "../../../../../common/text/Label";
import "./BaseInfo.scss"

export const BaseInfo = ({weatherIconStyle, cityName, temp, feelsLikeTemp}) => {
    return (
        <div className="BaseInfo container__column">
            <LabelWithIcon className={"BaseInfo_cityName"} icon={"location__filled"} value={cityName}/>
            <div className="BaseInfo_weather container__row">
                <div className={"icon__l " + weatherIconStyle}/>
                <div className="container__row">
                    <span className="BaseInfo_weather_text text__white text__shadow"> {temp}</span>
                    <span className="text__white"> °C</span>
                </div>
            </div>
            {feelsLikeTemp &&
            (<div className="BaseInfo_feelsLike container__row">
                <label className="BaseInfo_feelsLike_text text text__light">Feels like</label>
                <span className="text__white">{feelsLikeTemp} °C</span>
            </div>)}
        </div>
    )
}