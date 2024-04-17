import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";
import { SubTitle } from "../SubTitle";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { GraphsCard } from "./GraphsCard";
import { handleNotifications } from "../../../utils/handleNotifications";
import { reloadLocation } from "../../../utils/realoadLocation";

const GraphsGrid = () => {
    const context = React.useContext(AppContext)

    const handleGraphDelete = (id) => {
        axios.delete(`${context.apiUri}/graph`, {
            data: { id: id }
        })
        .then(response => {
            const {data} = response;

            if(data.Status === "Success") {
                handleNotifications("success", "Eliminado Correctamente")
                reloadLocation()
            } else {
                handleNotifications("error", data.Error);
            }
        })
        .catch(err => {handleNotifications("error", err)})
    }

    const handleGraphEdit = (item) => {
        context.setEditingGraph(true);
        handleNotifications("info", `Editando grafica con ID ${item.id}`)

        context.setGraphValues({
            id: item.id,
            title: item.TITULO_GRAFICA,
            year: item.AÑO,
            month: item.MES,
            grapLabelsType: item.TIPO_DATOS,
            graphType: item.TIPO_GRAFICA,
            description: item.DESCRIPCION,
            values: item.DATOS,
        })

        document.documentElement.scrollTo(0, 335)
    }

    return(
        <WrapperContainer1 flexDirection="column" gap={20}>
            <SubTitle>Últimas Gráficas Creadas</SubTitle>
            
            <WrapperContainer2 flexDirection="column" gap={15} padding={0}>
                {context.responseData?.graphs?.map((item, index) => (
                    <GraphsCard
                        key={index}
                        item={item}
                        onEdit={handleGraphEdit}
                        onDelete={handleGraphDelete}
                    />
                ))}
            </WrapperContainer2>
        </WrapperContainer1>
    );
}

export { GraphsGrid };