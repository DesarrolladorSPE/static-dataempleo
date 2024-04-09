import React from "react";
import { actualYear, getMonthsUntilCurrent, yearArray } from "../../../utils/dateFunctions";
import { AllInfoGridContainer } from "../AllInfoContainer";
import { ButtonCard } from "../ButtonCard";
import { OptionInputCard } from "../InputsCards";
import { SubTitle } from "../SubTitle";
import { WrapperContainer2 } from "../WrapperContainers";
import { AppContext } from "../../../Context";

const ExportFiltersCard = () => {
    const context = React.useContext(AppContext)
    const monthsArray = Object.keys(getMonthsUntilCurrent(actualYear));

    return(
        <WrapperContainer2 flexDirection="column" padding={0} gap={20}>
            <SubTitle>Crear documento (En Desarrollo)</SubTitle>
            <AllInfoGridContainer className="grid-1-1">
                <OptionInputCard
                    id={"export-year"} 
                    label={"Año"} 
                    array={yearArray}
                    // onChange={(event) => console.log(event.target.value)}
                    stateKey={"exportYear"}
                    defaultValue={actualYear}
                />
                <OptionInputCard
                    id={"export-month"} 
                    label={"Mes"} 
                    array={monthsArray}
                    // onChange={(event) => console.log(event.target.value)}
                    stateKey={"exportMonth"}
                    defaultValue={actualYear}
                />
            </AllInfoGridContainer>

            <ButtonCard
                title="Generar Documento"
                onClick={() => context.setOpenConfirmationModal({
                    status: true,
                    title: "¿Desea generar un documento con estos filtros?",
                    onConfirm: () => context.setOpenConfirmationModal({status: false}),
                    onCancel: () => context.setOpenConfirmationModal({status: false}),
                })}
            >
                Crear Documento
            </ButtonCard>
            
        </WrapperContainer2>
    );
}

export { ExportFiltersCard };