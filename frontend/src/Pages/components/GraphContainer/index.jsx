import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { Graph } from "./Graph";
import { SubTitle } from "../SubTitle";

import { graphValuesConfig } from "../../../utils/graphConfig";
import { TextCard } from "../TextComponents";

import "./styles.css"

const GraphContainer = ({array, onConfig=graphValuesConfig, index=""}) => {
    const values = onConfig(array);

    return(
        <div className="graph-overflow-container">
            <WrapperContainer2 padding={15} flexDirection="column" justifyContent="center" alignItems="center">
                <SubTitle textAlign="center">
                    {array?.title}
                </SubTitle>

                <Graph values={values} index={index}/>

                <WrapperContainer2 flexDirection="column" gap={0} padding={0}>
                    <TextCard>Total Nacional</TextCard>
                    <TextCard>*SISE: Sistema de Información del Servicio P&uacute;blico de Empleo</TextCard>
                </WrapperContainer2>
         
            </WrapperContainer2>
        </div>        
    );
}

export { GraphContainer };