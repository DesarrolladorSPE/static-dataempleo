import React from "react";
import { AppContext } from "../../../../Context";
import { anexoDemandaLaboral, colocacionesFebrero, ofertaLaboral } from "../../../../assets";
import { handleDounwload } from "../../../../utils/downloadFile";
import "./styles.css";

import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

const Table = () => {
    const context = React.useContext(AppContext)
    const colors = ["#e0161e", "#69CE27", "#3366cc"];

    const tableData = [
        {
            array: ['Anexo Estadistico de Demanda Laboral', 'Marzo 2024', 'Descargar'],
            file: anexoDemandaLaboral,
        },
        {
            array: ['Oferta laboral', 'Marzo 2024', 'Descargar'],
            file: ofertaLaboral,
        },
        {
            array: ['Colocaciones', 'Febrero 2024', 'Descargar'],
            file: colocacionesFebrero,
        },
    ];

    return (
        <table className="my-table">
            <thead>
                <tr>
                    <th>Documento</th>
                    <th>Fecha de Publicación</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => (
                    <tr key={index}>
                        {row?.array?.map((cell, cellIndex) => (
                            <td key={cellIndex} onClick={() => {
                                handleDounwload(row.file, row.array[0])
                            }}>
                                {cellIndex === 0 ? (
                                    <a>
                                        <PiMicrosoftExcelLogoFill fill={context.activeHighContrast ? "#FFFFFF" : colors[index]}/>
                                        {cell}
                                    </a>

                                ) : (
                                    cell
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export { Table };