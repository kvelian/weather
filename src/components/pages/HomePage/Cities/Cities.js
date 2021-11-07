import {useContext} from "react";

import {CityItemContainer} from "./CityItem/CityItemContainer";
import {CitiesContext} from "../../../App";

import './Cities.scss'

export const Cities = () => {
    const {cities} = useContext(CitiesContext);

    return (
        <div className="Cities">
            {cities.map(city => <CityItemContainer city={city}/>
            )}
        </div>
    );
}