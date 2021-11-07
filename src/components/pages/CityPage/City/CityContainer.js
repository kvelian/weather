import {useQuery} from "react-query";
import {useParams} from "react-router";
import {useState} from "react";

import {getStyleBackground} from "../../../../utils/helpers/getComponentStyle";
import {getCityFull} from "../../../../utils/api/getCity";

import {ForecastDayList} from "./ForecastDayList/ForecastDayList";
import {WeatherContainer} from "./Weather/WeatherContainer";
import {ForecastHourList} from "./ForecastHourList/ForecastHourList";

import "./cityContainer.scss"

export const CityContainer = () => {
    const {cityUrl} = useParams()
    const [selectedDay, setSelectedDay] = useState({})

    const {data, isLoading, error} = useQuery(['cityFull', cityUrl], () => getCityFull(cityUrl),
        {
            refetchOnWindowFocus: false,
            refetchInterval: 300000,
            cacheTime: 0,
            retry: false,
            onSuccess: data => {
                setSelectedDay(data.forecast.forecastday[0])
            }
        }
    )

    if (isLoading) return <div> Loading... </div>
    if (error) return <div> Error...: {error.message} </div>

    const cityName = data?.location.name + ", " + data?.location.country

    const {temp, tz, precip, cloud, day} = {temp: data?.current.temp_c, tz:data?.location.tz_id, precip: data?.current.precip_mm, cloud: data?.current.cloud, day: data?.current.is_day}
    const backgroundStyle = getStyleBackground(day, temp, precip, cloud)

    return (
        <div className={"CityContainer container__row " + backgroundStyle}>
            <ForecastDayList tz={tz} forecastDayMap={data?.forecast.forecastday} selectedDayDate={selectedDay.date_epoch} setSelectedDay={setSelectedDay}
                             backgroundStyle={backgroundStyle}/>

            <WeatherContainer current={data?.current} cityName={cityName} selectedDay={selectedDay}/>
            <ForecastHourList tz={tz} selectedDayHours={selectedDay.hour}/>
        </div>
    );
}