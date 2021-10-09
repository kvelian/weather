import {useEffect, useState} from "react";
import {useDispatch} from 'react-redux'

import {updateCity} from "../../redux/actions/cities"
import {useQuery} from "react-query";
import {API} from "../../axios";

export const SearchCities = () => {
    const dispatch = useDispatch()

    const [cityValue, setInputCityValue] = useState("")
    const [tempValue, setInputTempValue] = useState("")

    const onInputCityChange = e => setInputCityValue(e.target.value)
    const onInputTempChange = e => setInputTempValue(e.target.value)

    const {data, refetch } = useQuery('cities', async () => {
            const {data} = await API.get("/search.json", {params: {q: cityValue}});
            return data;
        },
        {
            refetchOnWindowFocus: false,
            enabled: false // turned off by default, manual refetch is needed
        }
    )

    useEffect(() => {
        cityValue.length > 2 && refetch()
    }, [cityValue])

    useEffect(() => {
        if (data) {
            console.log(data)
            dispatch(updateCity(data))
        }
    }, [data])

    // const createNewCity = () => {
    //     if (cityValue && tempValue) {
    //         dispatch(
    //             addCity({
    //                 name: cityValue,
    //                 temp: tempValue
    //             })
    //         )
    //     }
    //     setInputCityValue("")
    //     setInputTempValue("")
    // }

    return (
        <header>
            <input maxLength="40" onChange={onInputCityChange} value={cityValue} placeholder="Search your city..."/>
            <input maxLength="40" onChange={onInputTempChange} value={tempValue} placeholder="temp..."/>
            <button>
                Search
            </button>
        </header>
    );
}