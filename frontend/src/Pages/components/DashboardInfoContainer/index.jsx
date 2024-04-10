import { AllInfoContainer, AllInfoGridContainer } from "../AllInfoContainer";
import { GraphContainer } from "../GraphContainer";
import { InputsContainer } from "../InputsContainer";
import { GraphsGrid } from "../GraphsGrid";
import { ExportFiltersCard } from "../ExportFiltersCard";

const DashboardInfoContainer = () => {
    return(
        <AllInfoContainer>
            <AllInfoGridContainer className="grid-075-125">
                <InputsContainer/>
                
                <GraphContainer/>
            </AllInfoGridContainer>
            <ExportFiltersCard/>

            <GraphsGrid/>
            
        </AllInfoContainer>
    );
}

export { DashboardInfoContainer };