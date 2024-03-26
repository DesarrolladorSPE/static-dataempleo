import "./styles.css";

const AllInfoContainer = ({children}) => {
    return(
        <div className="all-info-container">
            {children}
        </div>
    );
}

const AllInfoGridContainer = ({children}) => {
    return(
        <div className="all-info-grid-container">
            {children}
        </div>
    );
}

export { AllInfoContainer, AllInfoGridContainer };