import { useNavigate } from "react-router-dom";

import { AllInfoContainer, AllInfoGridContainer } from "../AllInfoContainer";
import { GraphContainer } from "../GraphContainer";
import { InputsContainer } from "../InputsContainer";
import { GraphsGrid } from "../GraphsGrid";
import { ButtonCard } from "../ButtonCard";
import { AppContext } from "../../../Context";
import React from "react";
import { graphValuesConfig } from "../../../utils/graphConfig";

const DashboardInfoContainer = () => {
    const context = React.useContext(AppContext)
    const navigate = useNavigate();    

    const array = context.graphValues;

    return(
        <AllInfoContainer>
            <AllInfoGridContainer className="grid-075-125">
                <InputsContainer/>
                
                <GraphContainer array={array}/>
            </AllInfoGridContainer>

            <ButtonCard
                title="Ir a generar un nuevo boletin"
                onClick={() => navigate("/document")}
            >
                Generar Boletin
            </ButtonCard>

            <GraphsGrid/>
            
        </AllInfoContainer>
    );
}

export { DashboardInfoContainer };