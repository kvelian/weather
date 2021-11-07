import {SearchCitySelect} from "./SearchCitySelect/SearchCitySelect";
import {Cities} from "./Cities/Cities";

import './HomePage.scss'

export const HomePage = () => {
    return (
        <div className="HomePage container__column">
            <SearchCitySelect />
            <Cities />
        </div>
    )
}