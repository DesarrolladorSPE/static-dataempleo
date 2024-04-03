import "./styles.css";

const ButtonCard = ({children, className="button-card-container", title="", onClick}) => {
    return(
        <button
            className={className}
            title={title}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
}

export { ButtonCard };