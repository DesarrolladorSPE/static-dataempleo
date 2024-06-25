import { uriDropDown } from "../../../../utils/uriDropDown";
import { TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";

import "./styles.css";

const UriButtonCard = ({item}) => {
    return (
        <a className="uri-button-container" href={uriDropDown[item].link} target="_blank" rel="noopener noreferrer">
            <WrapperContainer2 flexDirection="column" alignItems="center" justifyContent="center" padding={0}>
                <img src={uriDropDown[item].image} alt={item} />
                <TextCard fontSize={15} textAlign="center" className="text-underline">{item}</TextCard>
            </WrapperContainer2>
        </a>
    );
}

export { UriButtonCard }