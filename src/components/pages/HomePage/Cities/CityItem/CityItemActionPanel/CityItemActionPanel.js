import {Button} from "../../../../../common/buttons/Button";

import "./cityItemActionTitle.scss"

export const CityItemActionPanel = ({deleteCity, openCity}) => {
    return (
        <div className="CityItem_ActionTitle container__row">
            <Button icon={"open"} value={"Open"} onClick={openCity}/>
            <Button icon={"delete"} value={"Delete"} onClick={deleteCity} reverse={true}/>
        </div>
    )
}