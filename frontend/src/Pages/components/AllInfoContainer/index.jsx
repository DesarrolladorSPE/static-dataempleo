import { MainTextContainer } from "../MainTextContainer";

import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { GraphContainer } from "../GraphContainer";
import { TableContainer } from "../TableContainer";

import "./styles.css";

const AllInfoContainer = () => {
    return(
        <div className="all-info-container">
            <div className="main-text-and-graph-container">
                <MainTextContainer/>
                
                <GraphContainer/>
            </div>
            <div className="table-and-ágination-container">
                <div className="pagination-buttons-container">
                    <IoIosArrowBack/>
                    <MdNavigateNext/>
                </div>

                <TableContainer/>
            </div>
        </div>
    );
}
export { AllInfoContainer };