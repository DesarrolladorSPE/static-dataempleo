import { Page, Text, Document, StyleSheet, View, Image } from '@react-pdf/renderer';
import { iconComplete } from '../../../assets';

const MyExportPDFDocument = ({graphs}) => {
    return(
        <Document>
            <Page size="A4" style={styles.body}>
                <View>
                    <Image 
                        src={iconComplete}
                        style={styles.image}
                    />
                </View>


                <Text style={styles.title}>Demanda laboral - Boletín septiembre 2023</Text>
                <Text style={styles.text}>
                    En este informe se describe el comportamiento de la demanda laboral nacional para el mes de septiembre del año 2023. Las descripciones se realizan sobre distintas dimensiones: sector, ocupación, educación, experiencia y salarios. La fuente de las estadísticas reportadas en este informe procede de la base de datos de las ofertas de empleo1 registradas por los empleadores a través de todos los prestadores autorizados de la red del Servicio Público de Empleo (SPE), información que es administrada por la Unidad del SPE.
                </Text>
                
                <Text style={styles.title}>Septiembre 2023</Text>
                <Text style={styles.text}>
                    Específicamente para el mes de septiembre del año 2023, se registraron 219.013 ofertas de empleo a nivel nacional, lo que representó una disminución de 12,9 puntos porcentuales (pp) frente al mismo mes del año 2022 (251.323) y un aumento del 17,1 pp frente a los niveles prepandemia, si se compara con septiembre del año 20192. 
                </Text>
                <Text style={styles.subtitle}>Gráfico 1. Ofertas de empleo registradas en el mes de septiembre (2015-2023)</Text>
                <Image src={graphs[0]} />

                <Text
                    style={styles.text}
                    render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`}
                />
            </Page>
        </Document> 
    );
}


const styles = StyleSheet.create({
    image: {
        // width: 200,
        height: 100,
        objectFit: "contain",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    body: {
        padding: 35,
        paddingHorizontal: 100,
        paddingBottom: 65,
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    canvas: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

export { MyExportPDFDocument };