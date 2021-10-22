import {useQuery} from "react-query";

import {getCityShort} from "../../../../axios/getCity";

import "./cityItem.css"

export const CityItemContainer = ({city}) => {
    const {data, isLoading, error} = useQuery(['cityShort', city], () => getCityShort(city),
        {
            refetchOnWindowFocus: false,
            staleTime: 300000,
            retry: false
        }
    )

    if (isLoading) return <div> Loading... </div>
    if (error) return <div> Error...: {error.message} </div>


    return (
        <>
            <label> {data.location.name}, {data.location.country}</label>
            <label> {data.current.temp_c}° C</label>
        </>
    );
}