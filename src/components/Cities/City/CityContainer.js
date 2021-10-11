import {useQuery} from "react-query";
import {getCity} from "../../../axios/cities";

import "./city.css"

export const CityContainer = ({cityUrl}) => {
    const {data, isLoading, error} = useQuery(['city', cityUrl], () => getCity(cityUrl),
        {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            retry: false
        }
    )

    if (isLoading) return <div> Loading... </div>
    if (error) return <div> Error...: {error.message} </div>

    return (
        <div className="City">
            <label> {data.location.name}, {data.location.country}</label>
            <label> {data.current.temp_c}° C</label>
        </div>
    );
}