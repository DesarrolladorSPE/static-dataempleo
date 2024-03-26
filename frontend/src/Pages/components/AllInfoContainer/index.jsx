import { MainTextContainer } from "../MainTextContainer";
import { GraphContainer } from "../GraphContainer";
import { TableContainer } from "../TableContainer";
import { PaginationButtons } from "../PaginationButtons";

import "./styles.css";

const AllInfoContainer = () => {
    return(
        <div className="all-info-container">
            <div className="main-text-and-graph-container">
                <MainTextContainer/>
                
                <GraphContainer/>
            </div>
            <div className="table-and-pagination-container">
                <PaginationButtons/>

                <TableContainer/>
            </div>
        </div>
    );
}
export { AllInfoContainer };