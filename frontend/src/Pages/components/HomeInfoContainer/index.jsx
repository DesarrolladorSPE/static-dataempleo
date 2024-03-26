import { AllInfoContainer, AllInfoGridContainer } from "../AllInfoContainer";
import { GraphContainer } from "../GraphContainer";
import { MainTextContainer } from "../MainTextContainer";
import { PaginationButtons } from "../PaginationButtons";
import { TableContainer } from "../TableContainer";

const HomeInfoContainer = () => {
    return(
        <AllInfoContainer>
            <AllInfoGridContainer>
                <MainTextContainer/>
                
                <GraphContainer/>
            </AllInfoGridContainer>

            <PaginationButtons/>
            <TableContainer/>
        </AllInfoContainer>
    );
}

export { HomeInfoContainer };