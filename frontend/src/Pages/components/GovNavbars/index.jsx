
import React from "react";
import { AppContext } from "../../../Context";
import { banner } from "../../../assets";

import { iconComplete } from "../../../assets";
import { NavButtons } from "../NavButtons";

import "./styles.css";

const GovNavbar = () => {
    const context = React.useContext(AppContext);

    return(
        <>
            <nav className="barra-superior-govco" aria-label="Barra superior">
                <a href="https://www.gov.co/" target="_blank" rel="noopener noreferrer"  aria-label="Portal del Estado Colombiano - GOV.CO"></a>
                <NavButtons/>
            </nav>
            <div className="container-logo-header-govco">
                <a className="logo-header-govco" rel="noopener noreferrer" target="_blank" href="https://www.serviciodeempleo.gov.co/portada">
                    <span>
                        <img src={iconComplete} alt="" />
                        <img src={banner} alt="" />
                    </span>
                </a>
                {context.auth &&
                    <p>Bienvenido {context.name}</p>
                }
            </div>
        </>

    );
}

export { GovNavbar }