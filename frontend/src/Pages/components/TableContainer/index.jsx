import { Title } from "../Title";
import { WrapperContainer2 } from "../WrapperContainers";
import { Table } from "./Table";

const TableContainer = () => {
    return(
        <WrapperContainer2 flexDirection="column" gap={5} padding={25}>
            <Title color="#000">
                DataEmpleo
            </Title>
            <Table/>
        </WrapperContainer2>
    );
}

export { TableContainer };