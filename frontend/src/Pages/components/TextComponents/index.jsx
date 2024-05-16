import "./styles.css";

const TextCard = ({children}) => {
    return(
        <p className="text-card">{children}</p>
    );
}

const SpanCard = ({children}) => {
    return(
        <span className="span-card">{children}</span>
    );
}

export { TextCard, SpanCard }