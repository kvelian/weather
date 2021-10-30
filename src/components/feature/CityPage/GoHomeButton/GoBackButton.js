import {useHistory} from "react-router-dom";

import "./goBackButton.scss"

export const GoBackButton = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/`);
    }

    return (
        <div className="GoBackButton container__row" onClick={handleClick}>
            <div className="icon__m arrow"/>
            <label className="label__grey" > Go back </label>
        </div>
    )
}