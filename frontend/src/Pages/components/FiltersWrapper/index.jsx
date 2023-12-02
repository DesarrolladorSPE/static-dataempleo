import "./styles.css";

const FiltersWrapper = ({children, flexDirection = "row", padding = 20, gap = 15}) => {
    return(
        <div className="filters-wrapper" style={{
            flexDirection: flexDirection,
            padding: padding,
            gap: gap,
        }}>
            {children}
        </div>
    );
}

export { FiltersWrapper };