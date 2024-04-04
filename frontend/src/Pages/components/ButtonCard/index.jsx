import "./styles.css";

const ButtonCard = ({children, className="button-card-container", title="", onClick, type="button"}) => {
    return(
        <button
            className={className}
            title={title}
            onClick={() => onClick()}
            type={type}
        >
            {children}
        </button>
    );
}

export { ButtonCard };