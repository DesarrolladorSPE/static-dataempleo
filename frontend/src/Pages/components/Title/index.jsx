
import "./styles.css";

const Title = ({children, color = "rgba(104, 29, 53, 1)"}) => {

    return (
        <div className="title-container">
            <h1 className="title" style={{
                color: color,
                borderColor: color
            }}>
                {children}
            </h1>
        </div>

    );
}

export { Title };