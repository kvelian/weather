import {useState} from "react";
import { useDispatch } from 'react-redux'
import {addCity} from "../../redux/actions/cities"

export const SearchCities = () => {
    const [cityValue, setInputCityValue] = useState("")
    const [tempValue, setInputTempValue] = useState("")

    const dispatch = useDispatch()

    const onInputCityChange = e => setInputCityValue(e.target.value)
    const onInputTempChange = e => setInputTempValue(e.target.value)

    const createNewCity = () => {
        if (cityValue && tempValue) {
            dispatch(
                addCity({
                    name: cityValue,
                    temp: tempValue
                })
            )
        }
        setInputCityValue("")
        setInputTempValue("")
    }

    return (
        <header>
            <input maxLength="40" onChange={onInputCityChange} value={cityValue} placeholder="Search your city..."/>
            <input maxLength="40" onChange={onInputTempChange} value={tempValue} placeholder="temp..."/>
            <button onClick={createNewCity}>
                Search
            </button>
        </header>
    );
}