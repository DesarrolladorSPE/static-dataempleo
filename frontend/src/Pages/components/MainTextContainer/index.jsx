import { FiltersWrapper } from "../FiltersWrapper";
import { SecondarySubTitle } from "../SecondarySubTitle";
import { Title } from "../Title";

import "./styles.css";

const MainTextContainer = () => {
    return(
        <>
            <FiltersWrapper
                flexDirection="column"
                padding={25}
                gap={10}
            >

                <Title color={"#000"} borderColor={"#000"}>
                    Principales Resultados <br/>
                    Noviembre 2023
                </Title>

                <p className="main-text">
                    Para el mes de <span>{`NN`}</span> de <span>{`NN`}</span>, se registraron <span>{`NN`}</span> ofertas de empleo activas de las cuales <span>{`NN`}</span> fueron nuevas ofertas de empleo, lo que representó un aumento/disminución de <span>{`NN`}</span> ofertas respecto al mismo mes de <span>{`NN`}</span>. 
                    <br />
                    <br />
                    El número de buscadores activos fue de <span>{`NN`}</span> e ingresaron <span>{`NN`}</span> nuevos buscadores, lo que representó un aumento/disminución de <span>{`NN`}</span> buscadores respecto al mismo mes de <span>{`NN`}</span>. Finalmente, se registraron <span>{`NN`}</span> colocaciones lo que representó un aumento/disminución de <span>{`NN`}</span> colocaciones.
                </p>
            </FiltersWrapper>
        </>
        
    );
}
export { MainTextContainer };