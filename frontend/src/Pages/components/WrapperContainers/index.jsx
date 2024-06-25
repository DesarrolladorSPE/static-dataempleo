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

const WrapperContainer2 = ({children, flexDirection = "row", padding = 20, paddingVertical=null, paddingHorizontal=null, gap = 15, justifyContent="start", alignItems="start"}) => {
    return(
        <div className="filters-wrapper2" style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {children}
        </div>
    );
}

const WrapperContainer3 = ({children, flexDirection = "row", padding = 20, paddingVertical=50, paddingHorizontal=30, gap = 15, justifyContent="start", alignItems="start"}) => {
    return(
        <div className="wrapper-container3" style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            paddingRight: paddingHorizontal || padding,
            paddingLeft: paddingHorizontal || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {children}
        </div>
    );
}

export { WrapperContainer1, WrapperContainer2, WrapperContainer3 };