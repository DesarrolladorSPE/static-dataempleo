import { graphLabels } from "./chartTypes";

const graphExportConfig = (array=[]) => {
    const values = {
        data: [
            [250000, 200000, 150000, 250000, 200000, 150000, 75000],
            [400000, 100000, 320000, 250000, 200000, 150000, 75000],
        ],
        labels: graphLabels[array?.TIPO_DATOS]?.array,
        datasetLabel: [array?.AÑO, array?.AÑO - 1], 
        options: {
            indexAxis: graphLabels[array?.TIPO_DATOS]?.indexAxis,
            type: array?.TIPO_GRAFICA, 
        }
    };

    return values;
}

const graphValuesConfig = (array=[]) => {
    const values = {
        data: [
            [250000, 200000, 150000, 250000, 200000, 150000, 75000],
            [400000, 100000, 320000, 250000, 200000, 150000, 75000],
        ],
        labels: graphLabels[array?.grapLabelsType]?.array,
        datasetLabel: [array?.year, array?.year - 1],
        options: {
            indexAxis: graphLabels[array?.grapLabelsType]?.indexAxis,
            type: array?.graphType,
        }
    }

    return values;
}

export { graphExportConfig, graphValuesConfig };