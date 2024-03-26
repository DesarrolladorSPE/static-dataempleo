import { InputCard, OptionInputCard } from "../InputsCards";
import { SubTitle } from "../SubTitle";
import { WrapperContainer2 } from "../WrapperContainers";

import { chartTypes } from "../../../utils/chartTypes";

const InputsContainer = () => {
    return(
        <WrapperContainer2
            flexDirection="column"
            padding={10}
            gap={20}
        >
            <SubTitle>
                Información del Gráfico
            </SubTitle>

            <InputCard 
                type="text" 
                id={"graph-title"} 
                label={"Titulo del Grafico"} 
                placeholder="Titulo"
            />
            <OptionInputCard 
                id={"chart-type"} 
                label={"Tipo de Gráfico"} 
                array={chartTypes}
            />
            
        </WrapperContainer2>
    );
}

export { InputsContainer };