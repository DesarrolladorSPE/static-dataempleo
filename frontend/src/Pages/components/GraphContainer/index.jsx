import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { Graph } from "./Graph";
import { SubTitle } from "../SubTitle";

import { graphValuesConfig } from "../../../utils/graphConfig";

const GraphContainer = ({array, onConfig=graphValuesConfig, index=""}) => {
    const values = onConfig(array);

    return(
        <WrapperContainer2 padding={0} flexDirection="column">
            <WrapperContainer1 flexDirection="column" gap={15}>
                <SubTitle textAlign="center">
                    {array?.title}
                </SubTitle>
                
                <Graph values={values} index={index}/>
            </WrapperContainer1>            
        </WrapperContainer2>
        
    );
}

export { GraphContainer };