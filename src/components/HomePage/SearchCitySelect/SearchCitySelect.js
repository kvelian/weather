import {useState, useRef} from "react";
import {useQuery} from "react-query";

import {getCities} from "../../../axios/getCities";
import {useClickOutside} from "../../../utils/useClickOutside";

import './searchCitySelect.scss'

const InputContainer = ({value, onChangeInput, onClickInput}) => {
    return (
        <div className="SearchCitiesSelect_InputContainer container__row">
            <div className="icon__s loupe"/>
            <div className="SearchCitiesSelect_Input container__column">
                <input className="input" maxLength="40" onChange={onChangeInput}
                       onClick={onClickInput} value={value}
                       placeholder="Search your city...">
                </input>
                <hr className="line line_underInput line__grey"/>
            </div>
        </div>
    )
}

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
        <div ref={ref} className="SearchCitiesSelect container__column">
            <InputContainer value={cityValue} onChangeInput={onChangeInputCity} onClickInput={onClickInputCity}/>
            {showOptions && (
                <div className="container__column">
                    {data && data.map(item => {
                        return <span className="option" key={item.url}
                                     value={item.url}
                                     onClick={() => addCityOnClick(item)}>{item.name}</span>
                    })}
                </div>
            )}
        </div>
    );
}