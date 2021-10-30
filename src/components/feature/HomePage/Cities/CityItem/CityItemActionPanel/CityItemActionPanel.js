import "./cityItemActionTitle.scss"

export const CityItemActionPanel = ({onClick, handleClick}) => {
    return (
        <div className="CityItem_ActionTitle container__row">
            <div className="container__row" onClick={handleClick}>
                <div className="icon__s open"/>
                <label className="label__dark"> Open </label>
            </div>
            <div className="container__row" onClick={onClick}>
                <label className="label__dark"> Delete </label>
                <div className="icon__s delete"/>
            </div>
        </div>
    )
}