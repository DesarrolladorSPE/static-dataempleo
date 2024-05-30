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
            <SubTitle>Abril 2024</SubTitle>

            <p className="main-text">
                Durante abril de 2024, se observó un aumento en el número de ofertas de empleo en las 23 principales ciudades, pasando de 42.381 en abril de 2023 a 51.623 en abril de 2024. Entre estas ciudades, Bogotá A.M. destacó con la mayor cantidad de ofertas (72.484), seguida por Medellín A.M. (27.388) y Cali A.M. (12.436). Por otro lado, Riohacha , Florencia y Quibdó registraron las cifras más bajas de ofertas de empleo, con 222, 203 y 66 respectivamente. Es notable que Bogotá A.M., Medellín A.M. y Cali A.M. concentraron conjuntamente el 78,0% del total de ofertas laborales durante dicho mes, evidenciando una marcada disparidad en la distribución de las oportunidades de empleo entre las principales ciudades del país.
            </p>
        </WrapperContainer2>
    );
}
export { MainTextContainer };