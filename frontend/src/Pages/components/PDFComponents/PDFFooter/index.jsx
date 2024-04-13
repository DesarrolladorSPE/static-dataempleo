import { Font, Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { Montserrat, MontserratBold } from "../../../../assets";
import { pdfColors } from "../../../../utils/PDFColors";

const PDFFooter = () => {
    return(
        <>
            <Text
                style={{...styles.footerText, position: "absolute", bottom: 30, left: 80}}
                render={({pageNumber}) => `${pageNumber}`}
                fixed
            />
            <View style={styles.footer} fixed>
                <View style={styles.flexRow}>
                    <View style={{...styles.footerText, ...styles.textEnd, fontWeight: "bold"}}>
                        <Text>UNIDAD ADMINISTRATIVA DEL SERVICIO PÚBLICO DE EMPLEO</Text>
                    </View>
                    <View style={{...styles.footerText, ...styles.borderLeft}}>
                        <Text>PBX: (601) 7560009</Text>
                        <Text>Carrera 7 No. 31-10, pisos 13 y 14</Text>
                        <Text>Bogotá, D.C. / Colombia</Text>
                        <Link style={{...styles.footerText}} src='https://www.serviciodeempleo.gov.co'>www.serviciodeempleo.gov.co</Link>
                    </View>
                </View>
            </View>
        </>
    );
}

Font.register({ family: 'Montserrat', fonts: [
    { src: Montserrat },
    { src: MontserratBold, fontWeight: 700 }
]});

const gapValue = 15;

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        right: 0,

        display: "flex",
        justifyContent: "center",

        paddingVertical: 15,
        paddingRight: 40,

        borderTop: 1,
        borderTopColor: pdfColors.yellow,
    },
    footerText: {
        fontSize: 10,
        textAlign: 'left',

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        marginBottom: 10,
        color: pdfColors.black,
        textDecoration: "none",
    },

    flexRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: gapValue,
    },
    borderLeft: {
        borderLeft: 1,
        borderLeftColor: pdfColors.yellow,
        borderLeftWidth: 1,
        paddingLeft: gapValue,
    },
    textEnd: {
        width: 150,
        textAlign: "right",
    }

});

export { PDFFooter };