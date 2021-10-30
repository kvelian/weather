import {CityItemContainer} from "./CityItem/CityItemContainer";

import './Cities.scss'

export const Cities = ({cities, deleteCity}) => {
    return (
        <div className="Cities">
            {cities.map(city => {
                return (
                    <CityItemContainer key={city} city={city} deleteCity={deleteCity}/>
                )
            })}
        </div>
    );
}