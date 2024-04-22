
import { Title } from "../../components/Title";
import { HomeInfoContainer } from "../../components/HomeInfoContainer";

import "./styles.css"
import { AuthWrapper } from "../../components/AuthWrapper";

const Home = () => {
    return (
        <AuthWrapper>
            <Title>
                DATAEMPLEO Estatico
            </Title>
            <HomeInfoContainer/>
        </AuthWrapper>
    );
}

export { Home };