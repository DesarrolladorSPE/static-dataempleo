import { obtenerFechaActual } from "../../../utils/dateFunctions";

import "./styles.css";

const DateCard = () => {
    const fechaActual = obtenerFechaActual();

    return(
        <p className="date">
            {fechaActual}
        </p>
    );
}

export { DateCard };