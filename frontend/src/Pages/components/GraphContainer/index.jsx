import React from "react";
import { AppContext } from "../../../Context";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { Graph } from "./Graph";
import { SubTitle } from "../SubTitle";

import { graphLabels } from "../../../utils/chartTypes";
import { months } from "../../../utils/dateFunctions";
import { ExportFiltersCard } from "../ExportFiltersCard";


const GraphContainer = () => {
    const context = React.useContext(AppContext);

    const values = {
        data: [
            [250000, 200000, 150000, 250000, 200000, 150000, 75000],
            [400000, 100000, 320000, 250000, 200000, 150000, 75000],
        ],
        labels: graphLabels[context.graphValues?.grapLabelsType].array,
        datasetLabel: [context.graphValues?.year, context.graphValues?.year - 1],
        options: {
            indexAxis: graphLabels[context.graphValues?.grapLabelsType].indexAxis,
            type: context.graphValues?.graphType,
        }
    }

    return(
        <WrapperContainer2 padding={0} flexDirection="column">
            <WrapperContainer1 flexDirection="column" gap={15}>
                <SubTitle textAlign="center">
                    {context.graphValues.title == "" ? "Gráfica" : context.graphValues.title} - {months[context.graphValues.month]} del {context.graphValues.year}
                </SubTitle>
                
                <Graph values={values}/>
            </WrapperContainer1>            
        </WrapperContainer2>
        
    );
}

export { GraphContainer };