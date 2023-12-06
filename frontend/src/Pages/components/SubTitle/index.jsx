import "./styles.css";

const SubTitle = ({children, color = "#000", textAlign = "start"}) => {
    return(
        <div className="sub-title">
            <h2  style={{
                color: color,
                textAlign: textAlign,
                borderBottomColor: color
            }}>
                {children}
            </h2>
        </div>
    );
}

export { SubTitle };