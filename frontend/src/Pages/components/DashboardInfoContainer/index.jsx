import { AllInfoContainer, AllInfoGridContainer } from "../AllInfoContainer";
import { GraphContainer } from "../GraphContainer";
import { InputsContainer } from "../InputsContainer";
import { GraphsGrid } from "../GraphsGrid";

const DashboardInfoContainer = () => {
    return(
        <AllInfoContainer>
            <AllInfoGridContainer className="grid-075-125">
                <InputsContainer/>
                
                <GraphContainer/>
            </AllInfoGridContainer>

            <GraphsGrid/>
            
        </AllInfoContainer>
    );
}

export { DashboardInfoContainer };