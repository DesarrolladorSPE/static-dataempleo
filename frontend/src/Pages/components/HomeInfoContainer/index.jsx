import { AllInfoContainer, AllInfoGridContainer } from "../AllInfoContainer";
import { GraphContainer } from "../GraphContainer";
import { MainTextContainer } from "../MainTextContainer";
import { TableContainer } from "../TableContainer";
import { WrapperContainer2 } from "../WrapperContainers";

const HomeInfoContainer = () => {
    const array1 = {
        title: "Ofertas de empleo registradas (total red de prestadores), ofertas de empleo registradas (SISE*), buscadores de empleo registrados (SISE*) y número de colocaciones (SISE*)",
        year: ["abril-2023", "abril-2024"],
        month: 9,
        grapLabelsType: "ofertasDeEmpleoRegistradas",
        graphType: "bar",
        description: "",
        values: [
            [181600, 14750, 65075, 42080],
            [182025, 16381, 80082, 50449],
        ],
    };

    // const array2 = { 
    //     title: "Número de ofertas de empleo registradas por 23 ciudades  - áreas metropolitanas",
    //     year: "Departamentos",
    //     month: 9,
    //     grapLabelsType: "areaMetropolitana",
    //     graphType: "line",
    //     description: "",
    //     values: [62066, 21871, 10533, 5118, 4553, 3321, 2494, 1729, 1636, 1327, 1165, 1004, 994, 849, 621, 562, 515, 440, 297, 203, 174, 166, 137, 76],
    // };

    return(
        <AllInfoContainer>
            <AllInfoGridContainer className="grid-1">
                <GraphContainer array={array1} index="0"/>
                
                {/* <GraphContainer array={array2} index="1"/> */}
            </AllInfoGridContainer>

            <WrapperContainer2 paddingHorizontal={20} padding={0}>
                <MainTextContainer/>
            </WrapperContainer2>

            <TableContainer/>
        </AllInfoContainer>
    );
}

export { HomeInfoContainer };