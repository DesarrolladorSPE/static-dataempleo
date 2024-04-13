import { StyleSheet, Text } from "@react-pdf/renderer";

const PDFTitle = ({children}) => {
    return(
        <Text style={styles.title}>
            {children}
        </Text>
    );
}

const PDFSubtitle = ({children}) => {
    return(
        <Text style={styles.subTitle}>
            {children}
        </Text>
    );
}
const PDFThirdtitle = ({children}) => {
    return(
        <Text style={styles.thirdTitle}>
            {children}
        </Text>
    );
}

const PDFText = ({children}) => {
    return(
        <Text style={styles.text}>
            {children}
        </Text>
    );
}


const styles = StyleSheet.create({
    title: {
        width: "100%",
        textAlign: "center",
        fontSize: 13,
        fontWeight: "bold",
        margin: 10,
    },
    subTitle: {
        width: "100%",
        margin: 10,

        textAlign: "center",
        fontSize: 10,
        fontWeight: "bold",
    },
    thirdTitle: {
        width: "100%",
        marginVertical: 10,

        textAlign: "left",
        fontSize: 10,
        fontWeight: "bold",
    },
    text: {
        fontSize: 10,
        textAlign: 'justify',

        marginBottom: 10
    },
});

export { PDFTitle, PDFSubtitle, PDFThirdtitle, PDFText };