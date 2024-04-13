import React from "react";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { saveImages } from "../../../utils/saveImages";
import { Graph } from "../GraphContainer/Graph";
import { AppContext } from "../../../Context";
import { graphLabels } from "../../../utils/chartTypes";
import { ButtonCard } from "../ButtonCard";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { MyExportPDFDocument } from "../MyExportPDFDocument";

import { AllInfoGridContainer } from "../AllInfoContainer";
import { SubTitle } from "../SubTitle";
import { OptionInputCard } from "../InputsCards";
import { actualYear, monthsArray, yearArray } from "../../../utils/dateFunctions";

const PDFContainer = () => {
    const context = React.useContext(AppContext)

    const graphsArray = context.responseData?.graphs;

    const handleValues = (item, index) => {
        const values = {
            data: [
                [250000, 200000, 150000, 250000, 200000, 150000, 75000],
                [400000, 100000, 320000, 250000, 200000, 150000, 75000],
            ],
            labels: graphLabels[item.TIPO_DATOS].array,
            datasetLabel: [item.AÑO, item.AÑO - 1], 
            options: {
                indexAxis: graphLabels[item.TIPO_DATOS].indexAxis,
                type: item.TIPO_GRAFICA, 
            }
        };

        return (
            <WrapperContainer1 padding={5} flexDirection="column">
                <Graph key={index} index={index} values={values} />
            </WrapperContainer1>
        );
    }

    const [graphImages, setGraphImages] = React.useState(null);
    React.useEffect(() => {
        if(graphsArray) {
            setTimeout(() => {
                setGraphImages(saveImages(graphsArray))
            }, 1000)
        }
    }, [graphsArray])

    return(
        <>
            <WrapperContainer2
                flexDirection="column"
                padding={0}
            >
                <AllInfoGridContainer className="grid-125-075">
                    <WrapperContainer2
                        flexDirection="column"
                        padding={0}
                        justifyContent="center"
                    >
                        <SubTitle>Crear documento (En Desarrollo)</SubTitle>
                        <OptionInputCard
                            id={"export-year"} 
                            label={"Año"} 
                            array={yearArray}
                            // onChange={(event) => console.log(event.target.value)}
                            stateKey={"exportYear"}
                            defaultValue={actualYear}
                        />
                        <OptionInputCard
                            id={"export-month"} 
                            label={"Mes"} 
                            array={monthsArray}
                            // onChange={(event) => console.log(event.target.value)}
                            stateKey={"exportMonth"}
                            defaultValue={actualYear}
                        />

                        <PDFDownloadLink document={<MyExportPDFDocument array={graphsArray} graphs={graphImages || []}/>} fileName='FORM'>
                            {({loading}) => ((loading) ? 
                                <ButtonCard>Cargando Documento</ButtonCard>
                                : 
                                <ButtonCard>Descargar Documento</ButtonCard>
                            )}
                        </PDFDownloadLink>
                    </WrapperContainer2>
                    
                    <PDFViewer style={{width: "100%", height: "100%", minHeight: 500}}>
                        <MyExportPDFDocument array={graphsArray} graphs={graphImages || []}/>
                    </PDFViewer>
                </AllInfoGridContainer>
                

                <WrapperContainer2 flexDirection="column" padding={0}>
                    <SubTitle>Graficas:</SubTitle>
                    
                    <AllInfoGridContainer className="grid-1-1">
                        {graphsArray?.map((item, index) => (
                            handleValues(item, index)
                        ))}
                    </AllInfoGridContainer>
                </WrapperContainer2>
            </WrapperContainer2>
        </>
    );
}

export { PDFContainer };