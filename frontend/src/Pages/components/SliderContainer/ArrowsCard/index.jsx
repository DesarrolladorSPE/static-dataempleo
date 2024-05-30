import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

import "./styles.css"

const NextArrowCard = ({className, style, onClick}) => {
    return (
        <div
            className={`${className} arrow-card`}
            style={{ ...style}}
            onClick={onClick}
        >
            <MdNavigateNext/>
        </div>
    );
}
  
const PrevArrowCard = ({className, style, onClick}) => {
    return (
        <div
            className={`${className} arrow-card`}
            style={{ ...style}}
            onClick={onClick}
        >
            <MdNavigateBefore/>
        </div>
    );
}

export { NextArrowCard, PrevArrowCard }