import "./styles.css";

import { IoIosArrowForward } from "react-icons/io";

const Table = () => {

    const tableData = [
        ['Boletín Técnico Demanda Laboral (ofertas de empleo)', '30 de Noviembre', 'PDF', 'Descargar'],
        ['Anexo de Demanda Laboral (ofertas de empleo)', '30 de Noviembre', 'Excel', 'Descargar'],
        ['Boletín técnico de oferta laboral (buscadores de empleo)', '30 de Noviembre', 'PDF', 'Descargar'],
        ['Anexo oferta laboral (buscadores de empleo)', '30 de Noviembre', 'Excel', 'Descargar'],
        ['Boletín Técnico colocaciones', '30 de Noviembre', 'PDF', 'Descargar'],
        ['Anexo colocaciones', '30 de Noviembre', 'Excel', 'Descargar'],
        ['Presentación (rueda de prensa)', '30 de Noviembre', 'PDF', 'Descargar'],
    ];

    return (
        <table className="my-table">
            <thead>
                <tr>
                    <th>Documento</th>
                    <th>Fecha de Publicación</th>
                    <th>Formato</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>
                                {cellIndex === 0 ? (
                                    <a href={`#link-${index + 1}`} id={`link-${index + 1}`}>
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