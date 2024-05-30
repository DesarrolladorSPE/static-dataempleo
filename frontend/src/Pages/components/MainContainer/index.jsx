import { DateCard } from "../DateCard";
import { DropDownCard } from '../DropDownCard';

import "./styles.css"


const MainContainer = ({children}) => {
    return(
        <div className="main-container">
            <div className="drop-date-container">
                <DropDownCard/>
                <DateCard/>
            </div>


            <div className="home-container">
                {children}
            </div>
        </div>
    );
}

export { MainContainer };