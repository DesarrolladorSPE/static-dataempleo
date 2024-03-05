import { banner } from "../../../assets";

import "./styles.css";

const GovNavbar = () => {

    return(
        <>
            <nav className="barra-superior-govco" aria-label="Barra superior">
                <a href="https://www.gov.co/" target="_blank" rel="noopener noreferrer"  aria-label="Portal del Estado Colombiano - GOV.CO"></a>
            </nav>
            <div className="container-logo-header-govco">
                <a rel="noopener noreferrer" target="_blank" href="https://www.serviciodeempleo.gov.co/portada">
                    <span className="logo-header-govco"></span>
                </a>
            </div>
        </>

    );
}

export { GovNavbar }