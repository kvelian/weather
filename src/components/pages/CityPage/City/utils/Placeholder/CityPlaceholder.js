import "./placeholder.scss"
export const CityPlaceholder = () => {
    return (
        <div className="CityItem_placeholder_container shadow container__row">
            <div className="container__column">
                <div className="CityItem_placeholder_item__long"/>
                <div className="CityItem_placeholder_item"/>
                <div className="CityItem_placeholder_item__long"/>
            </div>
            <div className="CityItem_placeholder_item__circle"/>
        </div>
    )
}