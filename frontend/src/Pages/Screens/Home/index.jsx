import "./styles.css"
import { Title } from "../../components/Title";
import { AllInfoContainer } from "../../components/AllInfoContainer";

const Home = () => {
    return (
        <div className="home-container">
            <Title
                color={"#FFF"}
                borderColor={"#FFF"}
            >
                DATAEMPLEO
            </Title>
            <AllInfoContainer/>
        </div>
    );
}

export { Home };