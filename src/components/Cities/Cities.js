import {CityContainer} from "./City/CityContainer";
import { useSelector } from 'react-redux'

export const Cities = () => {
    const cities = useSelector(state => state.cities)

    return (
        <div className="Cities">
            {cities.map(city => {
                return <CityContainer key={city} cityUrl={city}/>
            })}
        </div>
    );
}