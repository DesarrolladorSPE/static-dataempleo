import React from "react";
import { AppContext } from "../../../Context";

import { InputCard, OptionInputCard, TextAreaCard } from "../InputsCards";
import { SubTitle } from "../SubTitle";
import { WrapperContainer2 } from "../WrapperContainers";

import { chartTypes, graphLabels } from "../../../utils/chartTypes";
import { ButtonCard } from "../ButtonCard";
import { AllInfoGridContainer } from "../AllInfoContainer";

import { actualMonth, actualYear, getMonthsUntilCurrent, yearArray } from "../../../utils/dateFunctions";


const InputsContainer = () => {
    const context = React.useContext(AppContext);

    const grapLabels = Object.keys(graphLabels);
    const monthsArray = Object.keys(getMonthsUntilCurrent(context.graphValues.year));
    
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
                placeholder="Título"
                onChange={context.handleGraphValuesChange}
                stateKey={"title"}
            />

            <AllInfoGridContainer className="grid-1-1">
                <OptionInputCard 
                    id={"year"} 
                    label={"Año"} 
                    array={yearArray}
                    onChange={context.handleGraphValuesChange}
                    stateKey={"year"}
                    defaultValue={actualYear}
                />
                <OptionInputCard 
                    id={"month"} 
                    label={"Mes"} 
                    array={monthsArray}
                    onChange={context.handleGraphValuesChange}
                    stateKey={"month"}
                    defaultValue={actualMonth}
                />
            </AllInfoGridContainer>


            <OptionInputCard 
                id={"values-type"} 
                label={"Tipo de Datos"} 
                array={grapLabels}
                onChange={context.handleGraphValuesChange}
                stateKey={"grapLabelsType"}
                defaultValue={context.graphValues?.grapLabelsType}
            />
            <OptionInputCard 
                id={"chart-type"} 
                label={"Tipo de Gráfico"} 
                array={chartTypes}
                onChange={context.handleGraphValuesChange}
                stateKey={"graphType"}
                defaultValue={context.graphValues?.graphType}
            />

            <TextAreaCard 
                id={"graph-description"} 
                label={"Descripción"} 
                placeholder="Descripción"
                onChange={context.handleGraphValuesChange}
                stateKey={"description"}
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