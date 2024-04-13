import { useNavigate } from "react-router-dom";

import { AllInfoContainer, AllInfoGridContainer } from "../AllInfoContainer";
import { GraphContainer } from "../GraphContainer";
import { InputsContainer } from "../InputsContainer";
import { GraphsGrid } from "../GraphsGrid";
import { ButtonCard } from "../ButtonCard";

const DashboardInfoContainer = () => {
    const navigate = useNavigate();
    

    return(
        <AllInfoContainer>
            <AllInfoGridContainer className="grid-075-125">
                <InputsContainer/>
                
                <GraphContainer/>
            </AllInfoGridContainer>

            <ButtonCard
                title="Ir a generar un documento"
                onClick={() => navigate("/document")}
            >
                Generar Documento
            </ButtonCard>

            <GraphsGrid/>
            
        </AllInfoContainer>
    );
}

export { DashboardInfoContainer };