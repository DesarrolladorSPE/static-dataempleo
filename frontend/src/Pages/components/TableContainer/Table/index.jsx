import React from "react";
import { AppContext } from "../../../../Context";
import { handleDounwload, handleOpenFile } from "../../../../utils/downloadFile";
import "./styles.css";

import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa";

import { tableData } from "../../../../utils/tableData";

const Table = () => {
    const context = React.useContext(AppContext)
    const colors = ["#e0161e", "#69CE27", "#3366cc"];

    const handleRow = (row, cell, cellIndex) => {
        if (cellIndex === 0) {
            return(
                <td key={cellIndex}>
                    <a>
                         {row.link ? <PiMicrosoftExcelLogoFill fill={context.activeHighContrast ? "#FFFFFF" : colors[0]}/> : <FaFilePdf fill={context.activeHighContrast ? "#FFFFFF" : colors[0]}/>}
                        {cell}
                    </a>
                </td>
            )
        } else if (cellIndex === 2) {
            return(
                <td key={cellIndex} className="cursor-pointer" onClick={() => handleOpenFile(row.link || row.file)}>
                    {cell}
                </td>
            )
        } else if (cellIndex === 3) {
            return(
                <td key={cellIndex} className="cursor-pointer" onClick={() => handleDounwload(row.file, row.array[0])}>
                    {cell}
                </td>
            )
        } else {
            return(
                <td key={cellIndex}>
                    {cell}
                </td>
            );
        }
    }

    return (
        <div className="table-container">
            <table className="my-table">
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Fecha de Publicación</th>
                        <th>Acción</th>
                        <th>Descargar</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            {row?.array?.map((cell, cellIndex) => (
                                handleRow(row, cell, cellIndex, index)
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export { Table };