import { Title } from "../../components/Title";
import { HomeInfoContainer } from "../../components/HomeInfoContainer";

import "./styles.css"
import React from "react";
import { scrollToValue } from "../../../utils/scrollToValue";

const Home = () => {
    React.useEffect(() => {
        scrollToValue()
    },[])
    return (
        <>
            <Title>
                DATAEMPLEO Estatico
            </Title>
            <HomeInfoContainer/>
        </>
    );
}

export { Home };