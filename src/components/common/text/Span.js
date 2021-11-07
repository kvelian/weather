export const SpanWithIcon = ({className, icon, value}) => {
    return (
        <div className={className + " container__row"}>
            <div className={"icon__s " + icon}/>
            <span className="text"> {value}</span>
        </div>
    )
}