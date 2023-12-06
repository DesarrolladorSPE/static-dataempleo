import "./styles.css"
import { Title } from "../../components/Title";
import { AllInfoContainer } from "../../components/AllInfoContainer";
import { DateCard } from "../../components/DateCard";

const Home = () => {
    return (
        <div className="home-container">
            <DateCard/>
            <Title
                color={"#000"}
                borderColor={"#000"}
            >
                DATAEMPLEO
            </Title>
            <AllInfoContainer/>
        </div>
    );
}

export { Home };