import "./styles.css";

const ScrollableWrapper = ({children,  maxHeight = 250, gap = 5}) => {
    return(
        <div className="scrollable-wrapper-container" style={{
            maxHeight: maxHeight,
            gap: gap,
        }}>
            {children}     
        </div>
    );
}

export { ScrollableWrapper };