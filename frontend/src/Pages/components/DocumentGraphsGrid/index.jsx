import { graphLabels } from "../../../utils/chartTypes";
import { WrapperContainer1 } from "../WrapperContainers";
import { Graph } from "../GraphContainer/Graph";

const DocumentGraphsGrid = ({item, index}) => {
    const values = {
        data: [
            [250000, 200000, 150000, 250000, 200000, 150000, 75000],
            [400000, 100000, 320000, 250000, 200000, 150000, 75000],
        ],
        labels: graphLabels[item?.TIPO_DATOS]?.array,
        datasetLabel: [item?.AÑO, item?.AÑO - 1], 
        options: {
            indexAxis: graphLabels[item?.TIPO_DATOS].indexAxis,
            type: item?.TIPO_GRAFICA, 
        }
    };

    return (
        <WrapperContainer1 key={index} padding={5} flexDirection="column">
            <Graph index={index} values={values} />
        </WrapperContainer1>
    );
}

export { DocumentGraphsGrid };