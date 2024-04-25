import { DateCard } from "../DateCard";


import "./styles.css"
import { DropDownCard } from '../DropDownCard';


const MainContainer = ({children}) => {
    return(
        <div className="main-container">
            <div className="home-container">
                <DropDownCard/>

                <DateCard/>
                {children}
            </div>
        </div>
    );
}

export { MainContainer };