import { WrapperContainer2 } from "../WrapperContainers";
import { SubTitle } from "../SubTitle";

import "./styles.css";
import { AppContext } from "../../../Context";
import React from "react";

const MainTextContainer = ({item}) => {
    const context = React.useContext(AppContext)

    return(
        <>
            <WrapperContainer2
                flexDirection="column"
                padding={0}
                gap={20}
            >
                <SubTitle>{item?.title || context.responseData?.graphs?.[0]?.TITULO_GRAFICA}</SubTitle>

                <p className="main-text">{item?.description || context.responseData?.graphs?.[0]?.DESCRIPCION}</p>
            </WrapperContainer2>
        </>
        
    );
}
export { MainTextContainer };