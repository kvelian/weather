import {useQuery} from "react-query";
import {useHistory} from "react-router-dom";

import {getCityShort} from "../../../../axios/getCity";
import {getTimeFormatted, getDayFormatted} from "../../../../utils/getDateFormatted";

import "./cityItem.scss"

export const CityItemContainer = ({city, deleteCity}) => {
    const {data, isLoading, error} = useQuery(['cityShort', city], () => getCityShort(city),
        {
            refetchOnWindowFocus: false,
            staleTime: 300000,
            retry: false
        }
    )

    const history = useHistory();
    const handleClick = () => {
        console.log("@@@@")
        history.push(`/city/${city}`);
    }

    if (isLoading) return <div> Loading... </div>
    if (error) return <div> Error...: {error.message} </div>

    return (
            <div className="CityItem warmDay container__row" onClick={()=>handleClick}>
                <div className="container__column">
                    <div className="container__row CityItem_container_city">
                        <div className="icon__xs location"/>
                        <label className="CityItem_container_label"> {data.location.name}</label>
                    </div>
                    <label className="CityItem_container_label__temp"> {data.current.temp_c}° C</label>
                    <div className="container__row CityItem_container_date">
                        <div className="icon__xs time"/>
                        <label className="CityItem_container_label"> {getTimeFormatted(data?.location?.localtime_epoch, data?.location?.tz_id)}</label>
                        <div className="icon__xs calendar"/>
                        <label className="CityItem_container_label">{getDayFormatted(data?.location?.localtime_epoch, data?.location?.tz_id)}</label>
                    </div>
                </div>
                <div className="icon__m weather day__сlear"/>
            </div>
    );
}