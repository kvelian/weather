import "./cityForecastDay.scss"

const DayCard = ({day, backgroundStyle}) => {
    return (
        <div className={"CityForecastDay_dayCard " + backgroundStyle}>
            <label>{day.day.maxtemp_c}</label>
        </div>
    )
}

export const CityForecastDay = ({forecastday, backgroundStyle}) => {
    return (
        <div className="CityForecastDay container__glass border-gradient border-gradient-white container__column">
            {forecastday && forecastday.map((day) => {
                return <DayCard day={day} backgroundStyle={backgroundStyle}/>
            })}
        </div>
    )
}