import React from "react";
import { AppContext } from "../../../Context";
import { FiltersWrapper } from "../FiltersWrapper";
import { SubTitle } from "../SubTitle";

import "./styles.css";

const JobsCountContainer = () => {
    const context = React.useContext(AppContext);

    return(
        <FiltersWrapper
            flexDirection="column"
            padding={25}
            gap={10}
        >
            <SubTitle fontSize={16} text={"Número total de ofertas de empleo hoy de acuerdo a su búsqueda."}/>

            <div className="count-container">
                <p>{context.vacantesData?.total_registros}</p>
            </div>
        </FiltersWrapper>
    );
}

export { JobsCountContainer };