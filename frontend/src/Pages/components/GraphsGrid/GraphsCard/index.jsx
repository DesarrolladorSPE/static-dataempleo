import { months } from "../../../../utils/dateFunctions";
import { ScrollableWrapper } from "../../ScrollableWrapper";
import { ButtonCard } from "../../ButtonCard";


import { GoGraph } from "react-icons/go";
import { MdBarChart, MdEdit } from "react-icons/md";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";
import { PiChartPolarFill } from "react-icons/pi";
import { AiOutlineRadarChart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./styles.css"
import { ConfirmationModal } from "../../ConfirmationModal";
import { AppContext } from "../../../../Context";
import React from "react";

const GraphsCard = ({item, onEdit, onDelete}) => {
    const context = React.useContext(AppContext)

    const graphSvg = {
        bar: <MdBarChart />,
        doughnut: <BiSolidDoughnutChart />,
        pie: <FaChartPie />,
        line: <GoGraph/>,
        polarArea: <PiChartPolarFill />,
        radar: <AiOutlineRadarChart />, 
    }

    return(
        <div className="graph-card-container grid-1-auto gap-20">
            <div className="graph-card-info-container flex-column gap-20">
                <div className="flex-column gap-20">
                    <div className="grid-1-1 gap-20">
                        <div className="flex-column gap-5">
                            <p><span>Titulo:</span> {item.TITULO_GRAFICA} - {months[item.MES]} del {item.AÑO}</p>
                            <p><span>Mes:</span> {months[item.MES]}</p>
                            <p><span>Año:</span> {item.AÑO}</p>
                        </div>
                        <div className="flex-column gap-5 svg-25">
                            <p><span>Tipo de Datos:</span> {item.TIPO_DATOS}</p>
                            <p><span>Tipo de Gráfica:</span> {item.TIPO_GRAFICA}</p>
                            {graphSvg[item.TIPO_GRAFICA]}
                        </div>
                    </div>
                    <div className="flex-column">
                        <p><span>Descripción:</span></p>
                        <ScrollableWrapper maxHeight={100}>
                            <p>{item.DESCRIPCION}</p>
                        </ScrollableWrapper>
                    </div>
                </div>

                <div className="grid-1-1">
                    <div className="flex-column center">
                        <p>{item.id}</p>
                        <p><span className="font-14">Codigo ID</span></p>
                    </div>
                    <div className="flex-column center">
                        <p>{item.FECHA_CREACION}</p>
                        <p><span className="font-14">Fecha de Creación</span></p>
                    </div>
                </div>
            </div>

            <div className="flex-column center gap-20">
                <ButtonCard 
                    title="Editar Gráfico"
                    onClick={() => onEdit(item)}
                    padding={15}
                >
                    <MdEdit />
                </ButtonCard>
                <ButtonCard
                    title="Eliminar Gráfico"
                    onClick={() => context.setOpenConfirmationModal({
                        status: true,
                        title: "¿Esta seguro que desea elminar este Gráfico?",
                        onConfirm: () => onDelete(item.id),
                        onCancel: () => context.setOpenConfirmationModal({status:false}),
                    })}
                    padding={15}
                >
                    <RiDeleteBin6Line  />
                </ButtonCard>
            </div>
        </div>
    );
}

export { GraphsCard };