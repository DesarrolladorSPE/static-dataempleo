import React from "react";
import { AppContext } from "../../../Context";
import { uriDropDown } from "../../../utils/uriDropDown";
import { WrapperContainer3 } from "../WrapperContainers";
import { UriButtonCard } from "./UriButtonCard";

const UriButtonsContainer = () => {
    const context = React.useContext(AppContext);

    const array = Object.keys(uriDropDown);

    const responsive = context.windowWidth <= 960 ? true : false;

    return(
        <WrapperContainer3 flexDirection={responsive ? "column" : "row"} justifyContent="center" alignItems="center" paddingVertical={20} paddingHorizontal={30}  gap={20}>
            {array?.map((item, index) => (
                <UriButtonCard key={index} item={item}/>
            ))}
        </WrapperContainer3>
    );
}

export { UriButtonsContainer }