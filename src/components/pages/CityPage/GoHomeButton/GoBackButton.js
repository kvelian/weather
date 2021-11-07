import {useHistory} from "react-router-dom";

import "./goBackButton.scss"

export const GoBackButton = () => {
    const history = useHistory();

    return (
        <div className="GoBackButton cursor__pointer container__row" onClick={() => {history.push(`/`)}}>
            <div className="icon__m arrow"/>
            <span className="text__grey"> Go back </span>
        </div>
    )
}