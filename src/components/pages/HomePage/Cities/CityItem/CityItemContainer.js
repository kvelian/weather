import {useQuery} from "react-query";
import {useHistory} from "react-router-dom";
import {useContext} from "react";

import {getStyleBackground, getStyleWeatherIcon} from "../../../../../utils/helpers/getComponentStyle";
import {getCityShort} from "../../../../../utils/api/getCity";

import {CityItemCard} from "./CityItemCard/CityItemCard";
import {CityItemActionPanel} from "./CityItemActionPanel/CityItemActionPanel";
import {CityItemPlaceholder} from "./utils/Placeholder/CityItemPlaceholder";
import {CityItemError} from "./utils/Error/CityItemError";

import {CitiesContext} from "../../../../App";

export const CityItemContainer = ({city}) => {
    const {cities, setCities} = useContext(CitiesContext);
    const history = useHistory();

    const {data, isLoading, error, refetch} = useQuery(['cityShort', city], () => getCityShort(city),
        {
            refetchOnWindowFocus: false,
            refetchInterval: 300000,
            staleTime: 300000,
            retry: false
        }
    )

    if (isLoading) return <CityItemPlaceholder/>
    if (error && !data) return <CityItemError error={error.message} refetch={refetch}
                                              deleteCity={() => {setCities([...cities].filter(cityItem => !(cityItem === city)))}}/>

    const {name, temp, tz, precip, cloud, day} = {name: data?.location.name, temp: data?.current.temp_c, tz:data?.location.tz_id, precip: data?.current.precip_mm, cloud: data?.current.cloud, day: data?.current.is_day}
    const weatherIconStyle = getStyleWeatherIcon(day, temp, precip, cloud)
    const backgroundStyle = getStyleBackground(day, temp, precip, cloud)

    return (
        <div className="CityItem container__column">
            <CityItemActionPanel deleteCity={() => {setCities([...cities].filter(cityItem => !(cityItem === city)))}}
                                 openCity={() => {history.push(`/city/${city}`)
                                 }}/>
            <CityItemCard name={name} tz={tz} temp={temp} weatherIconStyle={weatherIconStyle} backgroundStyle={backgroundStyle}
                          openCity={() => {history.push(`/city/${city}`)
            }}/>
        </div>
    );
}