import { obtenerFechaActual } from "../../../utils/dateFunctions";
import "./styles.css";


const fechaActual = obtenerFechaActual();

const DateCard = ({children = fechaActual, className="top-right"}) => {
    return(
        <p className={`date ${className}`}>
            {children}
        </p>
    );
}

export { DateCard };