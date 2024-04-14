import { Page, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { Montserrat, MontserratBold } from '../../../assets';
import { PDFHeader } from '../PDFComponents/PDFHeader';
import { PDFFooter } from '../PDFComponents/PDFFooter';
import { pdfColors } from '../../../utils/PDFColors';
import { PDFText, PDFThirdtitle, PDFTitle } from '../PDFComponents/PDFTextsComponents';
import { PDFGraph } from '../PDFComponents/PDFGraph';
import { PDFWrapper } from '../PDFComponents/PDFWrapper';
import { actualMonth, actualYear, months } from '../../../utils/dateFunctions';
import { graphLabels } from '../../../utils/chartTypes';

const MyExportPDFDocument = ({graphs=[], array=[], year=actualYear, month=actualMonth}) => {

    return(
        <Document>
            <Page size="A4" style={styles.body}>
                <PDFHeader/>

                <PDFWrapper>
                    <PDFTitle>Demanda laboral - Boletín {months[month]} del {year}</PDFTitle>

                    <PDFText>En este informe se describe el comportamiento de la demanda laboral nacional para el mes de septiembre del año 2023. Las descripciones se realizan sobre distintas dimensiones: sector, ocupación, educación, experiencia y salarios. La fuente de las estadísticas reportadas en este informe procede de la base de datos de las ofertas de empleo1 registradas por los empleadores a través de todos los prestadores autorizados de la red del Servicio Público de Empleo (SPE), información que es administrada por la Unidad del SPE.</PDFText>
                    
                    <PDFTitle>{months[month]} {year}</PDFTitle>

                    <PDFText>
                        Específicamente para el mes de {months[month]} del año {year}, se registraron 219.013 ofertas de empleo a nivel nacional, lo que representó una disminución de 12,9 puntos porcentuales (pp) frente al mismo mes del año 2022 (251.323) y un aumento del 17,1 pp frente a los niveles prepandemia, si se compara con {months[month - 1]} del año {year - 1}. 
                    </PDFText>
                </PDFWrapper>

                {array?.map((item, index) => (
                    <PDFWrapper key={index}>
                        <PDFThirdtitle>{graphLabels[item.TIPO_DATOS].name}</PDFThirdtitle>
    
                        <PDFText>
                            {item.DESCRIPCION}
                        </PDFText>
    
                        
                        <PDFGraph
                            title={`${item.TITULO_GRAFICA} - ${months[item.MES]} del ${item.AÑO}`}
                            graph={graphs[index]}
                        />
                    </PDFWrapper>
                ))}
                <PDFTitle>Grupo de Estudio del Mercado Laboral</PDFTitle>
                <PDFTitle>Subdirección de Administración y Seguimiento</PDFTitle>
                <PDFFooter/>
            </Page>
        </Document> 
    );
}

Font.register({ family: 'Montserrat', fonts: [
    { src: Montserrat },
    { src: MontserratBold, fontWeight: 700 }
]});


const styles = StyleSheet.create({
    body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        position: "relative",

        paddingTop: 90,
        paddingHorizontal: 75, 
        paddingBottom: 110,

        fontFamily: "Montserrat"
    },

    flexRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10,
    },
    borderLeft: {
        borderLeft: 1,
        borderLeftColor: pdfColors.yellow,
        borderLeftWidth: 1,
        paddingLeft: 10
    },
    textEnd: {
        width: 150,
        textAlign: "right",
    }

});

export { MyExportPDFDocument };