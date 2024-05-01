import { AllInfoContainer, AllInfoGridContainer } from "../AllInfoContainer";
import { GraphContainer } from "../GraphContainer";
import { MainTextContainer } from "../MainTextContainer";
import { TableContainer } from "../TableContainer";
import { WrapperContainer2 } from "../WrapperContainers";

const HomeInfoContainer = () => {
    const array1 = {
        title: "Número de ofertas de empleo registradas por año de inicio de la oferta",
        year: "Años",
        month: 9,
        grapLabelsType: "ofertasRegistradas",
        graphType: "line",
        description: "",
        values: [165900, 111195, 149196, 247022, 224638, 152592],
    };

    const array2 = {
        title: "Número de ofertas de empleo registradas por 23 ciudades  - areas metropolitanas",
        year: "Departamentos",
        month: 9,
        grapLabelsType: "areaMetropolitana",
        graphType: "line",
        description: "",
        values: [62066, 21871, 10533, 5118, 4553, 3321, 2494, 1729, 1636, 1327, 1165, 1004, 994, 849, 621, 562, 515, 440, 297, 203, 174, 166, 137, 76],
    };

    return(
        <AllInfoContainer>
            <AllInfoGridContainer className="grid-1-1">
                <GraphContainer array={array1} index="0"/>
                
                <GraphContainer array={array2} index="1"/>
            </AllInfoGridContainer>

            <WrapperContainer2 paddingHorizontal={20} padding={0}>
                <MainTextContainer/>
            </WrapperContainer2>

            <TableContainer/>
        </AllInfoContainer>
    );
}

export { HomeInfoContainer };