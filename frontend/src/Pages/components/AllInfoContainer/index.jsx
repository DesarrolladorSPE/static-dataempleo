import { FiltersWrapper } from "../FiltersWrapper";
import { MainTextContainer } from "../MainTextContainer";
import { Graph } from "../Graph";


import "./styles.css";
import { AppContext } from "../../../Context";
import React from "react";
import { Title } from "../Title";
import { Table } from "../Table";

import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";



const AllInfoContainer = () => {
    const context = React.useContext(AppContext);

    const chartData = [context.responseData.total, 200000, 150000];
    const chartLabels = ['Ofertas de Empleo Activas', 'Buscadores de Empleo Activos', 'Colocaciones'];
    const chartDatasetLabel = '2023';

    return(
        <div className="all-info-container">
            <div className="main-text-and-graph-container">
                <MainTextContainer/>
                
                <FiltersWrapper flexDirection="column" gap={5}>
                    <Title color={"#000"} borderColor={"#000"}>
                        {`Principales Resultados Noviembre 2023`}
                    </Title>
                    <Graph data={chartData} labels={chartLabels} datasetLabel={chartDatasetLabel}/>
                </FiltersWrapper>
            </div>
            <div className="table-and-ágination-container">
                <div className="pagination-buttons-container">
                    <IoIosArrowBack/>
                    <MdNavigateNext/>
                </div>
                <FiltersWrapper flexDirection="column" gap={5} padding={25}>
                    <Title color={"#000"} borderColor={"#000"}>
                        {`Tabla`}
                    </Title>
                    <Table/>
                </FiltersWrapper>
            </div>
        </div>
    );
}
export { AllInfoContainer };