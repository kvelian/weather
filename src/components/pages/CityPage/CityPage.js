import {GoBackButton} from "./GoHomeButton/GoBackButton";
import {CityContainer} from "./City/CityContainer";

import "./cityPage.scss"

export const CityPage = () => {
    return (
        <div className="CityPage container__column">
            <GoBackButton />
            <CityContainer/>
        </div>
    )
}