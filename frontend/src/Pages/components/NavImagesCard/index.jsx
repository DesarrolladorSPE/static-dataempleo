import { banner, iconComplete } from "../../../assets";
import "./styles.css";

const NavImagesCard = () => {
    return(
        <div className="container-logo-header-govco">
            <div className="logo-header-govco" rel="noopener noreferrer" target="_blank" href="https://www.serviciodeempleo.gov.co/portada">
                <span>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.serviciodeempleo.gov.co/portada">
                        <img src={iconComplete} alt="" />
                    </a>
                    <a rel="noopener noreferrer" href="http://localhost:5173">
                        <img src={banner} alt="" />
                    </a>
                </span>
            </div>
        </div>
    );
}

export { NavImagesCard };