import { Image, StyleSheet } from "@react-pdf/renderer";
import { iconComplete, logoCoPotencia } from "../../../../assets";

const PDFHeader = () => {
    return(
        <>
            <Image 
                src={logoCoPotencia}
                style={{...styles.fixImages, left: 40}}
                fixed
            />
            <Image 
                src={iconComplete}
                style={{...styles.fixImages, right: 40}}
                fixed
            />
        </>
    );
}

const styles = StyleSheet.create({
    fixImages: {
        objectFit: "contain",
        position: "absolute",
        top: 25,
        width: 100
    },
});

export { PDFHeader }