import { graphLabels } from "./chartTypes";

const graphValuesConfig = (array=[]) => {
    const values = {
        data: array?.values,
        labels: graphLabels[array?.grapLabelsType]?.array,
        datasetLabel: array?.year,
        options: {
            indexAxis: graphLabels[array?.grapLabelsType]?.indexAxis,
            type: array?.graphType,
        }
    }

    return values;
}

export { graphValuesConfig };