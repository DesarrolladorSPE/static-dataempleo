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
import { saveImages } from '../../../utils/saveImages';
import { PDFContainer } from '../../components/PDFContainer';


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

    return(
        <>  
            <PDFContainer/>
        </>
    );
}

export { DocumentScreen };