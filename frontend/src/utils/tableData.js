import { 
    a_anexoBuscadoresDeEmpleoMayo, 
    a_boletinOfertaLaboralMayo2024,

    b_anexoOfertasDeEmpleoMayo, 
    b_anexoOfertasDeEmpleoSISEMayo,
    b_boletinDemandaLaboralRedSISEMayo2024, 

    c_anexoColocacionesMayo, 
    c_boletinColocacionesMayo2024,
    correlativaSISECuocUnidadSPE
    
} from "../assets";

const fecha = "Junio 2024";

const tableData = [
    {
        array: ['Anexo estadístico de buscadores de empleo registrados', fecha, "Abrir", 'Descargar'],
        file: a_anexoBuscadoresDeEmpleoMayo,
        link: "https://docs.google.com/spreadsheets/d/1roHmdsbNzahnTGxqa6LvApy2MM8AUg9T/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Boletín técnico - oferta laboral', fecha, "Abrir", 'Descargar'],
        file: a_boletinOfertaLaboralMayo2024,
        link: null,
    },
    {
        array: ['Anexo estadístico de ofertas de empleo registradas', fecha, "Abrir", 'Descargar'],
        file: b_anexoOfertasDeEmpleoMayo,
        link: "https://docs.google.com/spreadsheets/d/1EbiOOSyhol2NlXnyKrQRJfBrE_gEXvap/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Anexo estadístico de ofertas de empleo registradas en SISE', fecha, "Abrir", 'Descargar'],
        file: b_anexoOfertasDeEmpleoSISEMayo,
        link: "https://docs.google.com/spreadsheets/d/1AHq868au1cvQZLYT6iqw4E3KE_GoaqJ9/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Boletín técnico - demanda laboral', fecha, "Abrir", 'Descargar'],
        file: b_boletinDemandaLaboralRedSISEMayo2024,
        link: null,
    },
    {
        array: ['Anexo estadístico de colocaciones registradas', fecha, "Abrir", 'Descargar'],
        file: c_anexoColocacionesMayo,
        link: "https://docs.google.com/spreadsheets/d/1kX1dhUu4K5r42yM4QJcvg1t4qehHM7zY/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
    {
        array: ['Boletín técnico - colocaciones', fecha, "Abrir", 'Descargar'],
        file: c_boletinColocacionesMayo2024,
        link: null,
    },
    {
        array: ['Correlativa SISE-CUOC Unidad SPE', fecha, "Abrir", 'Descargar'],
        file: correlativaSISECuocUnidadSPE,
        link: "https://docs.google.com/spreadsheets/d/1m1g6lSnKuuf0fadwaHhRKqB0FmsqQQyD/edit?usp=sharing&ouid=104411060894586684778&rtpof=true&sd=true",
    },
];

export { tableData };