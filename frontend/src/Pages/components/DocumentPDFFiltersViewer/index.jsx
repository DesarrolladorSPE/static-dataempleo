import React from "react";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import {  getMonthsUntilCurrent, months, yearArray } from "../../../utils/dateFunctions";
import { AllInfoGridContainer } from "../AllInfoContainer";
import { OptionInputCard } from "../InputsCards";
import { WrapperContainer2 } from "../WrapperContainers";
import { MyExportPDFDocument } from "../MyExportPDFDocument";
import { SubTitle } from "../SubTitle";
import { ButtonCard } from "../ButtonCard";
import { AppContext } from "../../../Context";

const DocumentPDFFiltersViewer = ({array, graphImages}) => {
    const context = React.useContext(AppContext)

    const monthsArray = Object.keys(getMonthsUntilCurrent(context.filters?.AÑO));
    const year = context.filters?.AÑO;
    const month = context.filters?.MES;

    return(
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
                    onChange={context.handleFiltersChange}
                    stateKey={"AÑO"}
                    defaultValue={context.filters?.AÑO}
                />
                <OptionInputCard
                    id={"export-month"} 
                    label={"Mes"} 
                    array={monthsArray}
                    onChange={context.handleFiltersChange}
                    stateKey={"MES"}
                    defaultValue={context.filters?.MES}
                />

                <PDFDownloadLink document={<MyExportPDFDocument array={array} graphs={graphImages || []} year={year} month={month}/>} fileName={`Boletin-Demanda-${months[month]}-${year}`}>
                    {({loading}) => ((loading) ? 
                        <ButtonCard>Cargando Documento</ButtonCard>
                        : 
                        <ButtonCard>Descargar Documento</ButtonCard>
                    )}
                </PDFDownloadLink>
            </WrapperContainer2>
            
            <PDFViewer style={{width: "100%", height: "100%", minHeight: 500}}>
                <MyExportPDFDocument array={array} graphs={graphImages || []} year={year} month={month}/>
            </PDFViewer>
        </AllInfoGridContainer>
    );
}

export { DocumentPDFFiltersViewer };