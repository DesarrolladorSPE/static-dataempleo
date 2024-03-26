import "./styles.css";

const InputCard = ({type="text", id, label, placeholder="placeholder", onChange}) => {
    return(
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
            />
        </div>
    );
}

const OptionInputCard = ({id, label, array=[], onChange}) => {
    return(
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <select 
                name={id} 
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
            >
                {array?.map((item, index) => (
                    <option 
                        key={index}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </div> 
    );
}


export { InputCard, OptionInputCard };