import "./styles.css";

const DateCard = () => {
    const obtenerFechaActual = () => {
        const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const fecha = new Date();
        const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

        const fechaCapitalizada = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
      
        return fechaCapitalizada;
      }
      
      // Ejemplo de uso
      const fechaActual = obtenerFechaActual();

    return(
        <p className="date">
            {fechaActual}
        </p>
    );
}

export { DateCard };