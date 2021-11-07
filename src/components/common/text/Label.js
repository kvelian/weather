export const LabelWithIcon = ({className = "", icon, value}) => {
    return (
        <div className={className + " container__row"}>
            <div className={"icon__m " + icon}/>
            <label className="text"> {value} </label>
        </div>
    )
}