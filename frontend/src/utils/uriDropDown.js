import { buscadorDeEmpleo_01, documentosPoblacionales_05, documentosSectorialesTejidoEmpresarial_04, estudiosTransversales_02, proyeccionesEstudiosPrestadoresSPE_03 } from "../assets";

const uriDropDown = {
    "Buscador de empleo": {
        link: "https://www.buscadordeempleo.gov.co/#/home",
        image: buscadorDeEmpleo_01,
    },
    "Históricos Estudios transversales": {
        link: "https://www.serviciodeempleo.gov.co/dataempleo-spe/transversales",
        image: estudiosTransversales_02
    },
    "Históricos proyecciones y estudios prestadores del SPE": {
        link: "https://www.serviciodeempleo.gov.co/dataempleo-spe/red-de-prestadores",
        image: proyeccionesEstudiosPrestadoresSPE_03,
    },
    "Históricos documentos sectoriales y tejido empresarial": {
        link: "https://www.serviciodeempleo.gov.co/dataempleo-spe/tejido-empresarial",
        image: documentosSectorialesTejidoEmpresarial_04,
    },
    "Documentos poblacionales": {
        link: "https://www.serviciodeempleo.gov.co/dataempleo-spe/oferta-laboral/2022/sectores-economicos",
        image: documentosPoblacionales_05,
    },
}
export { uriDropDown };