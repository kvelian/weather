import {getDateFormattedByEpoch} from "../../../../../utils/helpers/getDateFormatted";


import "./ForecastDayList.scss"

const Day = ({tz, day, selectedDayDate, backgroundStyle, onClick}) => {
    const style = {
        backgroundImage: `url(${day.day.condition.icon})`
    }
    const epoch = day.date_epoch
    const dateWeek = getDateFormattedByEpoch(epoch, tz, 'ddd')
    const dateMonth = getDateFormattedByEpoch(epoch, tz, ', D MMM')

    const classNameDayCard = (selectedDayDate === epoch) ? backgroundStyle : backgroundStyle + "__mono"
    return (
        <div className={"Day cursor__pointer shadow " + classNameDayCard} onClick={onClick}>
            <div className="Day_dayInfo container__row">
                <div style={style} className="Day_icon"/>
                <span className="text text__light">{dateWeek}</span>
                <span className="text__white text__light">{dateMonth}</span>
            </div>
            <div className="Day_weatherInfo container__row">
                <label className="Day_weatherInfo_condition text__light text">{day.day.condition.text}</label>
                <div className="Day_weatherInfo_temp container__column">
                    <span className="text__light text__white">{Math.round(day.day.maxtemp_c)}</span>
                    <span className="text text__light">{Math.round(day.day.mintemp_c)}</span>
                </div>
            </div>
        </div>
    )
}

export const ForecastDayList = ({tz, forecastDayMap, selectedDayDate, setSelectedDay, backgroundStyle}) => {

    return (
        <div className="CityForecastDay container__glass border-gradient border-gradient-white container__column">
            {forecastDayMap && forecastDayMap.map((day) => {
                return <Day tz={tz} day={day} selectedDayDate={selectedDayDate} backgroundStyle={backgroundStyle} onClick={() => setSelectedDay(day)}/>
            })}
        </div>
    )
}