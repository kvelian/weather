import {SearchCitySelect} from "./SearchCitySelect/SearchCitySelect";
import {Cities} from "./Cities/Cities";
import {CitiesContext} from "../../App";
import {useContext} from "react";

import './HomePage.scss'

export const HomePage = () => {
    const {cities, setCities} = useContext(CitiesContext);

    const addCity = (city) => {
        const newCities = !cities.includes(city) ? [...cities, city] : [...cities]
        setCities(newCities)
    }

    const deleteCity = (city) => {
        const newCities = [...cities].filter(cityItem => !(cityItem === city))
        setCities(newCities)
    }

    return (
        <div className="HomePage container__column">
            <SearchCitySelect addCity={addCity}/>
            <Cities cities={cities} deleteCity={deleteCity}/>
        </div>
    )
}