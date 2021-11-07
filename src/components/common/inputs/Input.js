export const Input = ({value, onChange, onClick}) => {
    return (
        <div className="InputContainer container__row">
            <div className="icon__m loupe"/>
            <div className="Input container__column">
                <input className="input" maxLength="40" onChange={onChange}
                       onClick={onClick} value={value}
                       placeholder="Search your city...">
                </input>
                <hr className="line line_underInput line__grey"/>
            </div>
        </div>
    )
}