import "./Details.scss"

export const DetailsItem = ({icon, name, value}) => {
    return (
        <div className="WeatherDetails_table_item container__row">
            <div className="container__row">
                <div className={"icon__m " + icon}/>
                <label className="text text__white">{name}</label>
            </div>
            <span className="text text__light">{value}</span>
        </div>
    )
}

export const DetailsItemWind = ({windDir, value}) => {
    const windDirStyle = {
        transform: `rotate(${windDir}deg)`
    };

    return (
        <div className="WeatherDetails_table_item container__row">
            <div className="container__row">
                <div className="icon__m wind"/>
                <label className="text text__white">Wind</label>
            </div>
            <div className="container__row">
                <div style={windDirStyle} className="icon__m windDir" id="windDir"/>
                <span className="text text__light">{value}</span>
            </div>
        </div>
    )
}