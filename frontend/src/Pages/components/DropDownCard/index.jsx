import Dropdown from 'react-bootstrap/Dropdown';
import { uriDropDown } from '../../../utils/uriDropDown';

import "./styles.css";
import { IoIosArrowForward } from 'react-icons/io';

const DropDownCard = () => {
    const array = Object.keys(uriDropDown);

    return (
        <Dropdown className="dropdown-container">
            <Dropdown.Toggle id="dropdown-basic" className='dropdown-button'>
                Informacion Adicional
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-grid-container">
                {array?.map((item, index) => (
                    <div key={index} className='dropdown-anchor-container'>
                        <a href={uriDropDown[item]} target="_blank" rel="noopener noreferrer"><IoIosArrowForward /> {item}</a>
                    </div>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export { DropDownCard };