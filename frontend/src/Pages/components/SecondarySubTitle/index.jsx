import "./styles.css";

const SecondarySubTitle = ({children, fontSize = 18, color = "#FFF"}) => {
    return(
        <p className="sub-title" style={{
            fontSize: fontSize,
            color: color
        }}>
            {children}
        </p>
    );
}

export { SecondarySubTitle };