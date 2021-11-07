import "./error.scss"

export const CityError = ({error, refetch, deleteOnClick}) => {
    return (
        <div className="container__column">
            <div className="CityItemError_ActionTitle container__row">
                <div className="container__row cursor__pointer" onClick={refetch}>
                    <div className="icon__s refresh"/>
                    <label className="label__grey"> Refresh </label>
                </div>
                <div className="container__row cursor__pointer" onClick={deleteOnClick}>
                    <label className="label__grey"> Delete </label>
                    <div className="icon__s delete"/>
                </div>
            </div>
            <div className="CityItemError_Card cursor__pointer" onClick={refetch}>
                <label className="label__grey">Error: {error}</label>
            </div>
        </div>
    )
}