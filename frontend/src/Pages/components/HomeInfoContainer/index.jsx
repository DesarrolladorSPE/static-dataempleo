import { AllInfoContainer, AllInfoGridContainer } from "../AllInfoContainer";
import { GraphContainer } from "../GraphContainer";
import { MainTextContainer } from "../MainTextContainer";
import { TableContainer } from "../TableContainer";

const HomeInfoContainer = () => {

    const array = {
        title: "Grafico 1. Ofertas de empleo registradas en el mes de septiembre (2015-2023)",
        year: 2023,
        month: 9,
        grapLabelsType: "ofertasRegistradas",
        graphType: "line",
        description: "",
        values: [67190, 123919, 151195, 172836, 187067, 103401, 191526, 251323, 219013],
    };

    return(
        <AllInfoContainer>
            <AllInfoGridContainer>
                <MainTextContainer/>
                
                <GraphContainer array={array}/>
            </AllInfoGridContainer>

            <TableContainer/>
        </AllInfoContainer>
    );
}

export { HomeInfoContainer };