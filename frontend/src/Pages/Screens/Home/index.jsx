import "./styles.css"
import { Title } from "../../components/Title";
import { AllInfoContainer } from "../../components/AllInfoContainer";

const Home = () => {
    return (
        <div className="home-container">
            <Title
                color={"#00698E"}
                borderColor={"#00698E"}
            >
                Bolsa Única de Empleo del SPE.
            </Title>
            <AllInfoContainer/>
        </div>
    );
}

export {Home};