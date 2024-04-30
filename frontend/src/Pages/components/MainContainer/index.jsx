import { DateCard } from "../DateCard";


import "./styles.css"
import { DropDownCard } from '../DropDownCard';


const MainContainer = ({children}) => {
    return(
        <div className="main-container">
            <DropDownCard/>
            <DateCard/>

            <div className="home-container">
                {children}
            </div>
        </div>
    );
}

export { MainContainer };