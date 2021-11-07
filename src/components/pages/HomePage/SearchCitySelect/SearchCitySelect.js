import {useState, useRef, useContext} from "react";
import {useQuery} from "react-query";

import {getCities} from "../../../../utils/api/getCities";
import {useClickOutside} from "../../../../utils/hooks/useClickOutside";
import {Input} from "../../../common/inputs/Input";
import {CitiesContext} from "../../../App";

import './searchCitySelect.scss'

export const SearchCitySelect = () => {
    const {cities, setCities} = useContext(CitiesContext);
    const [cityValue, setInputCityValue] = useState("")
    const [showOptions, setShowOptions] = useState(false)

    const ref = useRef(null);
    useClickOutside(ref, () => setShowOptions(false));

    const {data} = useQuery(['cities', cityValue.toLowerCase()], () => getCities(cityValue.toLowerCase()),
        {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            retry: false
        }
    )

    const addCity = (city) => {
        const newCities = !cities.includes(city) ? [...cities, city] : [...cities]
        setInputCityValue("")
        setShowOptions(false)
        setCities(newCities)
    }

    return (
        <div ref={ref} className="SearchCitiesSelect container__column">
            <Input value={cityValue} onChange={(e) => {
                setInputCityValue(e.target.value)
                setShowOptions(true)
            }} onClick={() => {
                cityValue && setShowOptions(!showOptions)
            }}/>
            {showOptions && (
                <div className="container__column">
                    {data && data.map(city => <span className="option cursor__pointer" key={city.url}
                                                    value={city.url}
                                                    onClick={() => addCity(city)}>{city.name}</span>
                    )}
                </div>
            )}
        </div>
    );
}