import {useState, useRef} from "react";
import {useQuery} from "react-query";

import {getCities} from "../../../axios/getCities";
import {useClickOutside} from "../../../utils/useClickOutside";

export const SearchCitySelect = ({addCity}) => {
    const [cityValue, setInputCityValue] = useState("")
    const [showOptions, setShowOptions] = useState(false)

    const {data} = useQuery(['cities', cityValue.toLowerCase()], () => getCities(cityValue.toLowerCase()),
        {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            retry: false
        }
    )

    const ref = useRef(null);
    useClickOutside(ref, () => setShowOptions(false));

    const onChangeInputCity = e => {
        setInputCityValue(e.target.value)
        setShowOptions(true)
    }
    const onClickInputCity = () => {
        const showOptionsValue = !showOptions
        cityValue && setShowOptions(showOptionsValue)
    }

    const addCityOnClick = (item) => {
        setInputCityValue("")
        setShowOptions(false)
        addCity(item.url)
    }

    return (
        <div ref={ref} className="SearchCitiesSelect">
            <input className="SearchCitiesInput" maxLength="40" onChange={onChangeInputCity} onClick={onClickInputCity} value={cityValue}
                   placeholder="Search your city..."/>
            {showOptions && (
                <div className="SearchCitiesOptions">
                    {data && data.map(item => {
                        return <div key={item.url} value={item.url}
                                    onClick={() => addCityOnClick(item)}>{item.name}</div>
                    })}
                </div>
            )}
        </div>
    );
}