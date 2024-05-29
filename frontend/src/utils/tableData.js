import { 
    a_anexoBuscadoresDeEmpleoMarzo, 
    a_boletinOfertaLaboralMarzo2024,

    b_anexoOfertasDeEmpleoMarzo, 
    b_anexoOfertasDeEmpleoSISEMarzo,
    b_boletinDemandaLaboralRedSISEMarzo2024, 

    c_anexoColocacionesMarzo, 
    c_boletinColocacionesMarzo2024 
} from "../assets";

const fecha = "Mayo 2024";

const tableData = [
    {
        array: ['Anexo estadístico de buscadores de empleo registrados', fecha, "Abrir", 'Descargar'],
        file: a_anexoBuscadoresDeEmpleoMarzo,
        link: "https://docs.google.com/spreadsheets/d/1U4fRO3BDyddggiPGjkUKVhizb0LSD1ND/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Boletín técnico - oferta laboral', fecha, "Abrir", 'Descargar'],
        file: a_boletinOfertaLaboralMarzo2024,
        link: null,
    },
    {
        array: ['Anexo estadístico de ofertas de empleo registradas', fecha, "Abrir", 'Descargar'],
        file: b_anexoOfertasDeEmpleoMarzo,
        link: "https://docs.google.com/spreadsheets/d/1AEemY4MMRZDwk7ZP-_m334iBTmCISY3w/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Anexo estadístico de ofertas de empleo registradas en SISE', fecha, "Abrir", 'Descargar'],
        file: b_anexoOfertasDeEmpleoSISEMarzo,
        link: "https://docs.google.com/spreadsheets/d/1Q8nKKNPyb_oIbrTI22XJqIpiXrrafbTj/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Boletín técnico - demanda laboral', fecha, "Abrir", 'Descargar'],
        file: b_boletinDemandaLaboralRedSISEMarzo2024,
        link: null,
    },
    {
        array: ['Anexo estadístico de colocaciones registradas', fecha, "Abrir", 'Descargar'],
        file: c_anexoColocacionesMarzo,
        link: "https://docs.google.com/spreadsheets/d/1vRxuuGy5rJPxruJ60QSgbUzwWL-mAh76/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Boletín técnico - colocaciones', fecha, "Abrir", 'Descargar'],
        file: c_boletinColocacionesMarzo2024,
        link: null,
    },
];

export { tableData };