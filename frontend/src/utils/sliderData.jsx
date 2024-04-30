import { IoMdBusiness } from "react-icons/io";
import { formatNumbers } from "./formatNumbers";
import { MdAccountBalance, MdEngineering } from "react-icons/md";
import { GrMoney } from "react-icons/gr"
import { FaCode, FaPeopleGroup } from "react-icons/fa6";
import { PiBridge } from "react-icons/pi";

const sliderData = [
    {
        name: "Administración",
        icon: <IoMdBusiness/>,
        numericValue: formatNumbers(15226),
        percentValue: "10.1%",
    },
    {
        name: "Ingeniería Industrial",
        icon: <MdEngineering />,
        numericValue: formatNumbers(5839),
        percentValue: "3.9%",
    },
    {
        name: "Contaduria",
        icon: <MdAccountBalance />,
        numericValue: formatNumbers(4485),
        percentValue: "3%",
    },
    {
        name: "Ingeniería de Sistemas",
        icon: <FaCode  />,
        numericValue: formatNumbers(3003),
        percentValue: "2%",
    },
    {
        name: "Economia",
        icon: <GrMoney />,
        numericValue: formatNumbers(2343),
        percentValue: "1.5",
    },
    {
        name: "Comunicacion Social",
        icon: <FaPeopleGroup />,
        numericValue: formatNumbers(849),
        percentValue: "0.6%",
    },
    {
        name: "Ingeniería Civil",
        icon: <PiBridge  />,
        numericValue: formatNumbers(780),
        percentValue: "0.5%",
    },
]

export { sliderData };