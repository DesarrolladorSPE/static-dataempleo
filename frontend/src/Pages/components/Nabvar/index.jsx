import "./styles.css"

import { datosLista } from "../../../assets";
import { SliderContainer } from "../SliderContainer";

const Navbar = () => {
    return (
        <>
           {/* <div className="datos-image-container">
                <img src={datosLista} alt="datos-lista-image" />
            </div>     */}
            <SliderContainer/>
        </>

    );
}

export {Navbar};