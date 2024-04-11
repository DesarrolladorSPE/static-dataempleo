import React from 'react';
import axios from 'axios';
// import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import { useNavigate } from "react-router-dom";

import { MyExportPDFDocument } from '../../components/MyExportPDFDocument';
import { AppContext } from '../../../Context';
import { graphLabels } from '../../../utils/chartTypes';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ButtonCard } from '../../components/ButtonCard';
import { Graph } from '../../components/GraphContainer/Graph';


const DocumentScreen = () => {
    const context = React.useContext(AppContext);

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    React.useEffect(() => {
        axios.get(`${context.apiUri}/user/`)
            .then(response => {
                const {data} = response;

                if(data.Status === "Success") {
                    context.setAuth(true);
                    context.setName(data.name);
                } else {
                    context.setAuth(false);
                    context.setMessage(data.Error);
                    navigate("/home");
                }
            })
            .catch(err => {
                navigate("/home");
                console.log(err)
            })
    }, [])


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
            <Graph key={index} index={index} values={values} />
        );
    }
    const [graphImages, setGraphImages] = React.useState([]);

    const downloadPDF = () => {
        const canvas = document.getElementById("myChart0");
        const canvasImage = canvas.toDataURL("image/jpeg", 1.0);
        console.log(canvasImage);

        let pdf = new jsPDF();
        pdf.setFontSize(20);
        pdf.addImage(canvasImage, "JPEG", 15, 15, 280, 150);
        pdf.save("myChart")

    }

    return(
        <>
            {/* <PDFDownloadLink document={<MyExportPDFDocument/>} fileName='FORM'>
                {({loading}) => (loading ? 
                    <ButtonCard>Cargando documento</ButtonCard>
                    : 
                    <ButtonCard>Descargar Documento</ButtonCard>
                )}
            </PDFDownloadLink> */}

            <ButtonCard
                onClick={downloadPDF}
            >
                Descargar PDF
            </ButtonCard>

            {context.responseData?.graphs?.map((item, index) => (
                handleValues(item, index)
            ))}

        </>
    );
}

export { DocumentScreen };