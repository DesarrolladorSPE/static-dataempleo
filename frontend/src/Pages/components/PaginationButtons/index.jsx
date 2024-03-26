import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import "./styles.css";

const PaginationButtons = () => {
    return(
        <div className="pagination-buttons-container">
            <button>
                <IoIosArrowBack/>
            </button>
            <button>
                <MdNavigateNext/>
            </button>
        </div>
    );
}

export { PaginationButtons };