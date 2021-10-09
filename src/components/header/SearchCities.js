import {useState} from "react";
import {useDispatch} from 'react-redux'

import {useQuery} from "react-query";
import {getCities} from "../../axios/cities";
import {addCity} from "../../redux/actions/cities";

export const SearchCities = () => {
    const dispatch = useDispatch()

    const [cityValue, setInputCityValue] = useState("")

    const onInputCityChange = e => setInputCityValue(e.target.value)

    const {data} = useQuery(['cities', cityValue], () => getCities(cityValue),
        {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            retry: false
        }
    )

    const addCityOnClick = (item) => {
        dispatch(addCity(item))
    }


    return (
        <header>
            <input maxLength="40" onChange={onInputCityChange} value={cityValue} placeholder="Search your city..."/>
            {data && data.map(item => {
                return <button key={item.id} onClick={()=>addCityOnClick(item)}>{item.name}</button>
            })}
        </header>
    );
}