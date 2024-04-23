import { WrapperContainer2 } from "../WrapperContainers";
import { SubTitle } from "../SubTitle";

import "./styles.css";

const MainTextContainer = () => {

    return(
        <>
            <WrapperContainer2
                flexDirection="column"
                padding={0}
                gap={20}
            >
                <SubTitle>Septiembre 2023</SubTitle>

                <p className="main-text">
                Específicamente para el mes de septiembre del año 2023, se registraron 219.013 ofertas de empleo 
                a nivel nacional, lo que representó una disminución de 12,9 puntos porcentuales (pp) frente al 
                mismo mes del año 2022 (251.323) y un aumento del 17,1 pp frente a los niveles prepandemia, si 
                se compara con septiembre del año 2019.
                </p>
            </WrapperContainer2>
        </>
        
    );
}
export { MainTextContainer };