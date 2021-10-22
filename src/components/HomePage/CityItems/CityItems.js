import {CityItemContainer} from "./CityItem/CityItemContainer";
import {Link} from "react-router-dom";

export const CityItems = ({cities, deleteCity}) => {
    return (
        <div className="Cities">
            {cities.map(city => {
                return (
                    <div className="CityItem">
                        <Link to={`/city/${city}`}>
                            <CityItemContainer key={city} city={city}/>
                        </Link>
                        <button onClick={() => deleteCity(city)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}