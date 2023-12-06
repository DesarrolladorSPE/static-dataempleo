import { MdTextDecrease, MdTextIncrease } from "react-icons/md";
import { IoMdContrast } from "react-icons/io";
import { FaHandsAslInterpreting } from "react-icons/fa6"

import "./styles.css";

const AccesibilityButtonsContainer = ({color = "#FFF", flexDirection = "column"}) => {
    return(
        <div className="accesibility-icons-container">
            <div style={{
                flexDirection: flexDirection,
            }}>
                <MdTextIncrease fill={color}/>
                <MdTextDecrease fill={color}/>
                <IoMdContrast fill={color}/>
                <FaHandsAslInterpreting fill={color}/>
            </div>
        </div>
    );
}

export { AccesibilityButtonsContainer };