import { Title } from "../../components/Title";
import { HomeInfoContainer } from "../../components/HomeInfoContainer";

import "./styles.css"
import React from "react";
import { scrollToValue } from "../../../utils/scrollToValue";
import { DropDownCard } from "../../components/DropDownCard";

const Home = () => {
    React.useEffect(() => {
        scrollToValue()
    },[])
    return (
        <>
            <DropDownCard/>
            <Title>
                DATAEMPLEO
            </Title>
            <HomeInfoContainer/>
        </>
    );
}

export { Home };