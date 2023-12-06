import { WrapperContainer1 } from "../WrapperContainers";
import { MainTextContainer } from "../MainTextContainer";
import { Graph } from "../GraphContainer/Graph";


import "./styles.css";
import { AppContext } from "../../../Context";
import React from "react";
import { Title } from "../Title";
import { Table } from "../Table";

import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { GraphContainer } from "../GraphContainer";



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
                <WrapperContainer1 flexDirection="column" gap={5} padding={25}>
                    <Title color={"#000"} borderColor={"#000"}>
                        {`Tabla`}
                    </Title>
                    <Table/>
                </WrapperContainer1>
            </div>
        </div>
    );
}
export { AllInfoContainer };