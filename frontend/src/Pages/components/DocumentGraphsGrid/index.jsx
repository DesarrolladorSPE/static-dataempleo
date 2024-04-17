import { WrapperContainer1 } from "../WrapperContainers";
import { Graph } from "../GraphContainer/Graph";
import { graphExportConfig } from "../../../utils/graphConfig";

const DocumentGraphsGrid = ({item, index}) => {
    const values = graphExportConfig(item);

    return (
        <WrapperContainer1 key={index} padding={5} flexDirection="column">
            <Graph index={index} values={values} />
        </WrapperContainer1>
    );
}

export { DocumentGraphsGrid };