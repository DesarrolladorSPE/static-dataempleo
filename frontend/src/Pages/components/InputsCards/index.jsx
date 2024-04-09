import "./styles.css";

const InputCard = ({type="text", id, label, placeholder="placeholder", onChange, required=true, stateKey, defaultValue=""}) => {
    return(
        <div className="input-container">
            <label htmlFor={id}>{label} {required && "*"}</label>
            <input
                type={type}
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => {onChange(stateKey, event.target.value)}}
                required
                defaultValue={defaultValue}
            />
        </div>
    );
}

const OptionInputCard = ({id, label, array=[], onChange, stateKey, defaultValue=0}) => {
    return(
        <div className="input-container">
            <label htmlFor={id}>{label} </label>
            <select 
                name={id} 
                id={id}
                onChange={(event) => {onChange(stateKey, event.target.value)}}
                value={defaultValue}
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

const TextAreaCard = ({id, label, placeholder="placeholder", onChange, required=true, stateKey, defaultValue=""}) => {
    return(
        <div className="input-container">
            <label htmlFor={id}>{label} {required && "*"}</label>
            <textarea
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => {onChange(stateKey, event.target.value)}}
                required
                defaultValue={defaultValue}
            />
        </div>
    );
}


export { InputCard, OptionInputCard, TextAreaCard };