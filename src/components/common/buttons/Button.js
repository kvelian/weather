export const Button = ({icon, value, onClick, reverse = false}) => {
    if (reverse) {
        return (
            <div className="container__row cursor__pointer" onClick={onClick}>
                <span className="text__grey"> {value} </span>
                <div className={"icon__s " + icon}/>
            </div>
        )
    }
    return (
        <div className="container__row cursor__pointer" onClick={onClick}>
            <div className={"icon__s " + icon}/>
            <span className="text__grey"> {value} </span>
        </div>
    )
}
