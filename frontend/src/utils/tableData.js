import { anexoDemandaLaboral, colocacionesFebrero, colocacionesSISEFebrero, demandaLaboralMarzo, oferentesRegistradosSISEFebrero, ofertaLaboral, ofertaLaboralFebrero, ofertasEmpleoRegistradasSistema } from "../assets";

const fecha = "Abril 2024";

const tableData = [
    {
        array: ['Anexo estadístico de demanda laboral', fecha, "Abrir", 'Descargar'],
        file: anexoDemandaLaboral,
        link: "https://docs.google.com/spreadsheets/d/1XAS4RAz12k_RiqDWfKGdpV46UxHXynDV/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true"
    },
    {
        array: ['Oferta laboral', fecha, "Abrir", 'Descargar'],
        file: ofertaLaboral,
        link: "https://docs.google.com/spreadsheets/d/1hz4W1VOTVCDbSHHMfGKn7bcEraJf57DM/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true"
    },
    {
        array: ['Colocaciones', fecha, "Abrir", 'Descargar'],
        file: colocacionesFebrero,
        link: "https://docs.google.com/spreadsheets/d/1RcNs6SzcVyhIepDGgjTH9QImtXMOpZRL/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true"
    },
    


    {
        array: ['Anexo de oferentes registrados al mes de febrero del año 2024', fecha, "Abrir", 'Descargar'],
        file: oferentesRegistradosSISEFebrero,
        link: "https://docs.google.com/spreadsheets/d/1ymORjYpU7gzofmWQMB9O2cmlZaaXe-_P/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Boletín de oferentes registrados en el SISE al mes de febrero del año 2024', fecha, "Abrir", 'Descargar'],
        file: ofertaLaboralFebrero,
        link: null,
    },
    {
        array: ['Anexo de demanda laboral al mes de marzo del año 2024', fecha, "Abrir", 'Descargar'],
        file: ofertasEmpleoRegistradasSistema,
        link: "https://docs.google.com/spreadsheets/d/1I5XyAkuEmjxczGg47GSv2smCbWsvuD1M/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Boletín de demanda laboral al mes de marzo del año 2024', fecha, "Abrir", 'Descargar'],
        file: demandaLaboralMarzo,
        link: null,
    },
    {
        array: ['Anexo de colocaciones  al mes de febrero del año 2024', fecha, "Abrir", 'Descargar'],
        file: colocacionesSISEFebrero,
        link: "https://docs.google.com/spreadsheets/d/1dasSoZxZNyHfJqnxnfM-ZZlWhSE0I9nK/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
];

export { tableData };