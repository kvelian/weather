import {Button} from "../../../../../../common/buttons/Button";
import "./error.scss"

export const CityItemError = ({error, refetch, deleteCity}) => {
    return (
        <div className="container__column">
            <div className="CityItem_error_ActionTitle container__row">
                <Button icon={"refresh"} value={"Refresh"} onClick={refetch}/>
                <Button icon={"delete"} value={"Refresh"} onClick={deleteCity} reverse={true}/>
            </div>
            <div className="CityItem_error_Card cursor__pointer" onClick={refetch}>
                <span className="text__grey">Error: {error}</span>
            </div>
        </div>
    )
}