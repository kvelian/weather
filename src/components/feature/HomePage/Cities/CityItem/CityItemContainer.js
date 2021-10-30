import {useQuery} from "react-query";
import {useHistory} from "react-router-dom";

import {getCityShort} from "../../../../../axios/getCity";
import {CityItemCard} from "./CityItemCard/CityItemCard";
import {CityItemActionPanel} from "./CityItemActionPanel/CityItemActionPanel";
import {getStyleBackground, getStyleWeatherIcon} from "../../../../../utils/getComponentStyle";

export const CityItemContainer = ({city, deleteCity}) => {
    const {data, isLoading, error} = useQuery(['cityShort', city], () => getCityShort(city),
        {
            refetchOnWindowFocus: false,
            refetchInterval: 300000,
            staleTime: 300000,
            retry: false
        }
    )

    const history = useHistory();
    const handleClick = () => {
        history.push(`/city/${city}`);
    }

    if (isLoading) return <div> Loading... </div>
    if (error) return <div> Error...: {error.message} </div>

    const [tz, temp, name, precip, cloud, day] = [data?.location.tz_id, data?.current.temp_c, data?.location.name, data?.current.precip_mm, data?.current.cloud, data?.current.is_day]
    const weatherIconStyle = getStyleWeatherIcon(day, temp, precip, cloud)
    const backgroundStyle = getStyleBackground(day, temp, precip, cloud)

    return (
        <div className="CityItem container__column">
            <CityItemActionPanel city={city} onClick={()=>deleteCity(city)} handleClick={handleClick}/>
            <CityItemCard name={name} tz={tz} temp={temp} weatherIconStyle={weatherIconStyle} backgroundStyle={backgroundStyle} handleClick={handleClick}/>
        </div>
    );
}