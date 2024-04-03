import React from "react";
import { AppContext } from "../../../Context";

import { InputCard, OptionInputCard, TextAreaCard } from "../InputsCards";
import { SubTitle } from "../SubTitle";
import { WrapperContainer2 } from "../WrapperContainers";

import { chartTypes, graphLabels } from "../../../utils/chartTypes";
import { ButtonCard } from "../ButtonCard";
import { AllInfoGridContainer } from "../AllInfoContainer";
import { monthArray, yearArray } from "../../../utils/dateFunctions";


const InputsContainer = () => {
    const context = React.useContext(AppContext);

    const grapLabels = Object.keys(graphLabels);
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

            <AllInfoGridContainer className="grid-1-1">
                <OptionInputCard 
                    id={"year"} 
                    label={"Año"} 
                    array={yearArray}
                    onChange={(value) => setGraphValues({...graphValues, graphType: value})}
                />
                <OptionInputCard 
                    id={"month"} 
                    label={"Mes"} 
                    array={monthArray}
                    onChange={(value) => setGraphValues({...graphValues, graphType: value})}
                />
            </AllInfoGridContainer>


            <OptionInputCard 
                id={"chart-type"} 
                label={"Tipo de Gráfico"} 
                array={chartTypes}
                onChange={(value) => setGraphValues({...graphValues, graphType: value})}
            />
            <OptionInputCard 
                id={"values-type"} 
                label={"Tipo de Datos"} 
                array={grapLabels}
                onChange={(value) => setGraphValues({...graphValues, grapLabelsType: value})}
            />
            <TextAreaCard 
                id={"graph-description"} 
                label={"Descripción"} 
                placeholder="Descripción"
                onChange={(value) => setGraphValues({...graphValues, title: value})}
            />

            <ButtonCard
                title="Guardar Información"
                onClick={() => {console.log("guardar")}}
            >
                Guardar
            </ButtonCard>
            
        </WrapperContainer2>
    );
}

export { InputsContainer };