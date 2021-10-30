import {useQuery} from "react-query";
import {getCityFull} from "../../../../axios/getCity";
import {useParams} from "react-router";
import {getStyleBackground, getStyleWeatherIcon} from "../../../../utils/getComponentStyle";

import {CityBaseInfo} from "./CityBaseInfo/CityBaseInfo";
import {CityWeatherDetails} from "./CityWeatherDetails/CityWeatherDetails";
import {CityForecastDay} from "./CityForecastDay/CityForecastDay";

import "./cityContainer.scss"

export const CityContainer = () => {
    let {cityUrl} = useParams();
    const {data, isLoading, error} = useQuery(['cityFull', cityUrl], () => getCityFull(cityUrl),
        {
            refetchOnWindowFocus: false,
            refetchInterval: 300000,
            staleTime: 300000,
            retry: false
        }
    )

    if (isLoading) return <div> Loading... </div>
    if (error) return <div> Error...: {error.message} </div>

    const cityName = data?.location.name + ", " + data?.location.country

    const [day, temp, precip, cloud] = [data?.current.is_day, data?.current.temp_c, data?.current.precip_mm, data?.current.cloud]
    const weatherIconStyle = getStyleWeatherIcon(day, temp, precip, cloud)
    const backgroundStyle = getStyleBackground(day, temp, precip, cloud)


    return (
        <div className={"CityContainer container__row " + backgroundStyle}>
            <CityForecastDay forecastday={data?.forecast.forecastday} backgroundStyle={backgroundStyle}/>
            <div className="CityWeatherContainer container__column">
                <CityBaseInfo weatherIconStyle={weatherIconStyle} cityName={cityName} temp={temp}/>
                <CityWeatherDetails current={data?.current} forecast={data?.forecast} alerts={data?.alerts}/>
            </div>
            <CityForecastDay forecastday={data?.forecast.forecastday}/>
        </div>
    );
}