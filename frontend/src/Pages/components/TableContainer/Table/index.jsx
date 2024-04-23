import { anexoDemandaLaboral, colocacionesFebrero, ofertaLaboral } from "../../../../assets";
import { handleDounwload } from "../../../../utils/downloadFile";
import "./styles.css";

import { IoIosArrowForward } from "react-icons/io";

const Table = () => {

    const tableData = [
        {
            array: ['Anexo Demanda Laboral Año 2024 Marzo', 'Marzo', 'Descargar'],
            file: anexoDemandaLaboral,
        },
        {
            array: ['Oferta laboral Marzo', 'Marzo', 'Descargar'],
            file: ofertaLaboral,
        },
        {
            array: ['Colocaciones febrero 2024', 'Febrero', 'Descargar'],
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
                                        <IoIosArrowForward/>
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