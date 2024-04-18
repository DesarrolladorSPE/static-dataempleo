import { Title } from "../../components/Title";
import { DateCard } from "../../components/DateCard";
import { DashboardInfoContainer } from "../../components/DashboardInfoContainer";
import { AuthWrapper } from "../../components/AuthWrapper";


const DashboardScreen = () => {

    return (
        <AuthWrapper>
            <DateCard/>

            <Title>
                Dashboard de DATAEMPLEO
            </Title>
            <DashboardInfoContainer/>
        </AuthWrapper>
    );
}

export { DashboardScreen };