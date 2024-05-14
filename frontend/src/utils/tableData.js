import { a_anexoBuscadoresDeEmpleoMarzo, a_boletinOfertaLaboralMarzo2024, b_anexoOfertasDeEmpleoMarzo, b_boletinDemandaLaboralMarzo2024, c_anexoColocacionesMarzo, c_boletinColocacionesMarzo2024 } from "../assets";

const fecha = "Mayo 2024";

const tableData = [
    {
        array: ['Anexo estadístico de buscadores de empleo registrados ', fecha, "Abrir", 'Descargar'],
        file: a_anexoBuscadoresDeEmpleoMarzo,
        link: "https://docs.google.com/spreadsheets/d/1hAvkdNYri3K6Flv7dQe1jLzX9fPWBSkV/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Boletín técnico - oferta laboral', fecha, "Abrir", 'Descargar'],
        file: a_boletinOfertaLaboralMarzo2024,
        link: null,
    },
    {
        array: ['Anexo estadístico de ofertas de empleo registradas ', fecha, "Abrir", 'Descargar'],
        file: b_anexoOfertasDeEmpleoMarzo,
        link: "https://docs.google.com/spreadsheets/d/1mTyIficZ9VlxfieW48zH17a_X3tpjRhg/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Boletín técnico - demanda laboral', fecha, "Abrir", 'Descargar'],
        file: b_boletinDemandaLaboralMarzo2024,
        link: null,
    },
    {
        array: ['Anexo estadístico de colocaciones registradas', fecha, "Abrir", 'Descargar'],
        file: c_anexoColocacionesMarzo,
        link: "https://docs.google.com/spreadsheets/d/1_Zwo6kY4wNomyLM9Cungd8hhZSlDD6Yz/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Boletín técnico - colocaciones', fecha, "Abrir", 'Descargar'],
        file: c_boletinColocacionesMarzo2024,
        link: null,
    },
];

export { tableData };