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
            <SubTitle>Mayo 2024</SubTitle>

            <p className="main-text">
                Durante mayo de 2024, se observó un descenso en el número de ofertas de empleo en las 23 principales ciudades de -16,32% en comparación con el mismo período del año anterior, totalizando 136.861 ofertas. Entre estas ciudades, Bogotá A.M. destacó con la mayor cantidad de ofertas (66.770), seguida por Medellín A.M. (3.354) y Cali A.M. (11.702). Por otro lado, Florencia, Sincelejo y Quibdó registraron las cifras más bajas de ofertas de empleo, con 260, 223 y 76 respectivamente. Es notable que Bogotá A.M., Medellín A.M. y Cali A.M. concentraron conjuntamente el 77,0% del total de ofertas laborales de la red y el 62,0% de SISE durante dicho mes, evidenciando una marcada disparidad en la distribución de las oportunidades de empleo entre las principales ciudades del país.								
            </p>
        </WrapperContainer2>
    );
}
export { MainTextContainer };