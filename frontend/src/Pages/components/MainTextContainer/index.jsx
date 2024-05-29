import { WrapperContainer2 } from "../WrapperContainers";
import { SubTitle } from "../SubTitle";

import "./styles.css";

const MainTextContainer = () => {

    return(
        <WrapperContainer2
            flexDirection="column"
            padding={0}
            gap={20}
        >
            <SubTitle>Marzo 2024</SubTitle>

            <p className="main-text">
                Durante marzo de 2024, se observó un descenso en el número de ofertas de empleo a nivel nacional de -32,1% en comparación con el mismo período del año anterior, totalizando 152.529 ofertas. Por su parte, las 23 principales ciudades del país alcanzaron los 121.851 ofertas, lo que representó el 79,9% del total de vcantes de la red. Entre estas ciudades, Bogotá A.M. destacó con la mayor cantidad de ofertas (62.066), seguida por Medellín A.M. (21.871) y Cali A.M. (10.533). Por otro lado, Florencia, Riohacha y Quibdó registraron las cifras más bajas de ofertas de empleo, con 166, 137 y 76 respectivamente. Es notable que Bogotá A.M., Medellín A.M. y Cali A.M. concentraron conjuntamente el 77,5% del total de ofertas laborales durante dicho mes, evidenciando una marcada disparidad en la distribución de las oportunidades de empleo entre las principales ciudades del país.
            </p>
        </WrapperContainer2>
    );
}
export { MainTextContainer };