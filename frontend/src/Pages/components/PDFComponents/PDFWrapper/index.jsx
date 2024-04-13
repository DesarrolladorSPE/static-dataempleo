import { StyleSheet, View } from "@react-pdf/renderer";

const PDFWrapper = ({children, stylesProp}) => {
    return(
        <View styles={{...stylesProp, ...styles.wrapper}}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 0,
    },
});

export { PDFWrapper };