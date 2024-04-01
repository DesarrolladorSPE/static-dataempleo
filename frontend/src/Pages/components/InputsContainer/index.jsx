import React from "react";
import { AppContext } from "../../../Context";

import { InputCard, OptionInputCard } from "../InputsCards";
import { SubTitle } from "../SubTitle";
import { WrapperContainer2 } from "../WrapperContainers";

import { chartTypes, graphLabels } from "../../../utils/chartTypes";


const InputsContainer = () => {
    const context = React.useContext(AppContext);

    const grapLabels = Object.keys(graphLabels)

    const {graphValues, setGraphValues} = context;

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
                onChange={(value) => setGraphValues({...graphValues, title: value})}
            />
            <OptionInputCard 
                id={"chart-type"} 
                label={"Tipo de Gráfico"} 
                array={chartTypes}
                onChange={(value) => setGraphValues({...graphValues, graphType: value})}
            />
            <OptionInputCard 
                id={"chart-type"} 
                label={"Tipo de Gráfico"} 
                array={grapLabels}
                onChange={(value) => setGraphValues({...graphValues, grapLabelsType: value})}
            />
            
        </WrapperContainer2>
    );
}

export { InputsContainer };