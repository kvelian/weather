import {SearchCitySelect} from "./SearchCitySelect/SearchCitySelect";
import {CityItems} from "./CityItems/CityItems";
import {CitiesContext} from "../App";
import {useContext} from "react";

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
        <div className="HomePage">
            <SearchCitySelect addCity={addCity}/>
            <CityItems cities={cities} deleteCity={deleteCity}/>
        </div>
    )
}