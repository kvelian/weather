import {useQuery} from "react-query";
import {getCityFull} from "../../../axios/getCity";
import {useParams} from "react-router";

export const CityContainer = () => {
    let { cityUrl } = useParams();
    const {data, isLoading, error} = useQuery(['cityFull', cityUrl], () => getCityFull(cityUrl),
        {
            refetchOnWindowFocus: false,
            staleTime: 300000,
            retry: false
        }
    )

    if (isLoading) return <div> Loading... </div>
    if (error) return <div> Error...: {error.message} </div>

    return (
        <div className="CityPage">
            <label> {data.location.name}, {data.location.country}</label>
            <label> {data.current.temp_c}° C</label>
            <label> {data.current.feelslike_c}° C</label>
        </div>
    );
}