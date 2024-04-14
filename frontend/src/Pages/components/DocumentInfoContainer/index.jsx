import React from "react";

import { saveImages } from "../../../utils/saveImages";
import { AppContext } from "../../../Context";

import { AllInfoGridContainer } from "../AllInfoContainer";
import { SubTitle } from "../SubTitle";
import { DocumentGraphsGrid } from "../DocumentGraphsGrid";
import { WrapperContainer2 } from "../WrapperContainers";
import { DocumentPDFFiltersViewer } from "../DocumentPDFFiltersViewer";

const DocumentInfoContainer = () => {
    const context = React.useContext(AppContext)

    const graphsArray = context.responseData?.exportGraphs ||  null;

    const [graphImages, setGraphImages] = React.useState(null);
    React.useEffect(() => {
        if(graphsArray) {
            setTimeout(() => {
                setGraphImages(saveImages(graphsArray))
            }, 1000)
        }
    }, [graphsArray, context.filters])


    return(
        <WrapperContainer2
            flexDirection="column"
            padding={0}
        >
            <DocumentPDFFiltersViewer 
                array={graphsArray} 
                graphImages={graphImages}
            />
            

            <WrapperContainer2 flexDirection="column" padding={0}>
                <SubTitle>Graficas:</SubTitle>
                
                <AllInfoGridContainer className="grid-1-1">
                    {graphsArray?.map((item, index) => (
                        <DocumentGraphsGrid item={item} index={index} key={index}/>
                    ))}
                </AllInfoGridContainer>
            </WrapperContainer2>
        </WrapperContainer2>
    );
}

export { DocumentInfoContainer };