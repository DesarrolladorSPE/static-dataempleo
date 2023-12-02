import React from "react";
import { AppContext } from "../../../Context";
import { FiltersWrapper } from "../FiltersWrapper";
import { ScrollableWrapper } from "../ScrollableWrapper";
import { SubTitle } from "../SubTitle";
import { MunicipalityCard } from "./MunicipalityCard";
import { LoadingCardSmall } from "../LoadingCard";

const MunicipalityGrid = () => {
    const context = React.useContext(AppContext);

    const sortedTotalDepartments = context.vacantesData?.total_departments?.sort((a, b) => b.total - a.total);

    return(
        <FiltersWrapper
            flexDirection={"column"}
            padding={25}
            gap={15}
        >
            <SubTitle text="Municipios"/>

            <ScrollableWrapper
                maxHeight={490}
            >
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>
                <LoadingCardSmall/>

                {context.vacantesData?.total_departments?.length <= 1 && !context.loading &&
                    <MunicipalityCard
                        text={"Todos los Departamentos"}
                        value={null}
                        onClick={() => {
                            context.clearSelectedDepartment();
                        }}
                    />
                }
                { !context.loading && sortedTotalDepartments?.map((item, index) => (
                    <MunicipalityCard
                        key={index}
                        text={item.department}
                        value={item.total}
                        onClick={(value) => context.saveSelectedDepartment(value)}
                    />   
                ))}

            </ScrollableWrapper>
        </FiltersWrapper>
    );
}

export { MunicipalityGrid };