import "./city.css"

export const CityContainer = ({city}) => {

    return (
        <div className="City">
            <label> {city.name} </label>
        </div>
    );
}