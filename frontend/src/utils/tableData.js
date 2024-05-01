import { anexoDemandaLaboral, colocacionesFebrero, colocacionesSISEFebrero, demandaLaboralMarzo, oferentesRegistradosSISEFebrero, ofertaLaboral, ofertaLaboralFebrero, ofertasEmpleoRegistradasSistema } from "../assets";

const fecha = "Abril 2024";

const tableData = [
    {
        array: ['Anexo Estadistico de Demanda Laboral', fecha, "Abrir", 'Descargar'],
        file: anexoDemandaLaboral,
        link: "https://1drv.ms/x/s!AtboDZo1OdKclUXIqSrQUJtnx4aP?e=FNC7a6"
    },
    {
        array: ['Oferta laboral', fecha, "Abrir", 'Descargar'],
        file: ofertaLaboral,
        link: "https://1drv.ms/x/s!AtboDZo1OdKclUT5x8gejxYvYV69?e=8dUgZZ"
    },
    {
        array: ['Colocaciones', fecha, "Abrir", 'Descargar'],
        file: colocacionesFebrero,
        link: "https://1drv.ms/x/s!AtboDZo1OdKclUNFaijTp23-BlL8?e=iFFnIN"
    },
    {
        array: ['Anexo de oferentes registrados al mes de febrero del año 2024', fecha, "Abrir", 'Descargar'],
        file: ofertaLaboralFebrero,
        link: null,
    },
    {
        array: ['Boletín de oferentes registrados en el SISE al mes de febrero del año 2024', fecha, "Abrir", 'Descargar'],
        file: demandaLaboralMarzo,
        link: null,
    },
    {
        array: ['Anexo de demanda laboral al mes de marzo del año 2024', fecha, "Abrir", 'Descargar'],
        file: colocacionesSISEFebrero,
        link: null,
    },
    {
        array: ['Boletín de demanda laboral al mes de marzo del año 2024', fecha, "Abrir", 'Descargar'],
        file: oferentesRegistradosSISEFebrero,
        link: null,
    },
    {
        array: ['Anexo de colocaciones  al mes de febrero del año 2024', fecha, "Abrir", 'Descargar'],
        file: ofertasEmpleoRegistradasSistema,
        link: null,
    },
];

export { tableData };