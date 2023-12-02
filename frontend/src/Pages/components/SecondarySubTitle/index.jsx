import "./styles.css";

const SecondarySubTitle = ({text, fontSize = 18, color = "#FFF"}) => {
    return(
        <p className="sub-title" style={{
            fontSize: fontSize,
            color: color
        }}>
            {text}
        </p>
    );
}

export { SecondarySubTitle };