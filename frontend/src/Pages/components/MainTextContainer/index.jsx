import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css";
import { SubTitle } from "../SubTitle";

const MainTextContainer = () => {
    return(
        <>
            <WrapperContainer2
                flexDirection="column"
                padding={10}
                gap={20}
            >
                <SubTitle>
                    Principales Resultados <br />- Noviembre 2023
                </SubTitle>

                <p className="main-text">
                    Para el mes de <span>{`NN`}</span> de <span>{`NN`}</span>, se registraron <span>{`NN`}</span> ofertas de empleo activas de las cuales <span>{`NN`}</span> fueron nuevas ofertas de empleo, lo que representó un aumento/disminución de <span>{`NN`}</span> ofertas respecto al mismo mes de <span>{`NN`}</span>. 
                    <br />
                    <br />
                    <br />
                    El número de buscadores activos fue de <span>{`NN`}</span> e ingresaron <span>{`NN`}</span> nuevos buscadores, lo que representó un aumento/disminución de <span>{`NN`}</span> buscadores respecto al mismo mes de <span>{`NN`}</span>. Finalmente, se registraron <span>{`NN`}</span> colocaciones lo que representó un aumento/disminución de <span>{`NN`}</span> colocaciones.
                </p>
            </WrapperContainer2>
        </>
        
    );
}
export { MainTextContainer };