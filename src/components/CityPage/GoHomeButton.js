import {Link} from "react-router-dom";

export const GoHomeButton = () => {
    return (
        <div>
            <Link to="/">
                <label> Back </label>
            </Link>
        </div>
    )
}