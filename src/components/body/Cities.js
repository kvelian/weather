import {CityContainer} from "./city/CityContainer";
import { useSelector } from 'react-redux'

export const Cities = () => {
    const cities = useSelector(state => state.cities)

    return (
        <div className="Cities">
            {cities.map(city => {
                return <CityContainer key={city.id} city={city}/>
            })}
        </div>
    );
}