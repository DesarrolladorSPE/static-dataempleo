import { AllInfoContainer, AllInfoGridContainer } from "../AllInfoContainer";
import { GraphContainer } from "../GraphContainer";
import { InputsContainer } from "../InputsContainer";
import { PaginationButtons } from "../PaginationButtons";

const DashboardInfoContainer = () => {
    return(
        <AllInfoContainer>
            <AllInfoGridContainer>
                <InputsContainer/>
                
                <GraphContainer/>
            </AllInfoGridContainer>

            <PaginationButtons/>
            
        </AllInfoContainer>
    );
}

export { DashboardInfoContainer };