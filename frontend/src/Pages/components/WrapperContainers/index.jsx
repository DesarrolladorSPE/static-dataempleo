import "./styles.css";

const WrapperContainer1 = ({children, flexDirection = "row", padding = 20, gap = 15}) => {
    return(
        <div className="filters-wrapper1" style={{
            flexDirection: flexDirection,
            padding: padding,
            gap: gap,
        }}>
            {children}
        </div>
    );
}

const WrapperContainer2 = ({children, flexDirection = "row", padding = 20, paddingVertical=null, gap = 15, justifyContent="start"}) => {
    return(
        <div className="filters-wrapper2" style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
        }}>
            {children}
        </div>
    );
}

export { WrapperContainer1, WrapperContainer2 };