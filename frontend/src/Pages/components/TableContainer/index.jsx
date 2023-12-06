import { Title } from "../Title";
import { WrapperContainer1 } from "../WrapperContainers";
import { Table } from "./Table";

const TableContainer = () => {
    return(
        <WrapperContainer1 flexDirection="column" gap={5} padding={25}>
            <Title color="#000">
                {`Tabla`}
            </Title>
            <Table/>
        </WrapperContainer1>
    );
}

export { TableContainer };