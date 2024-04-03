import { AllInfoContainer, AllInfoGridContainer } from "../AllInfoContainer";
import { GraphContainer } from "../GraphContainer";
import { InputsContainer } from "../InputsContainer";
import { PaginationButtons } from "../PaginationButtons";

const DashboardInfoContainer = () => {
    return(
        <AllInfoContainer>
            <AllInfoGridContainer className="grid-075-125">
                <InputsContainer/>
                
                <GraphContainer/>
            </AllInfoGridContainer>

            <PaginationButtons/>
            
        </AllInfoContainer>
    );
}

export { DashboardInfoContainer };