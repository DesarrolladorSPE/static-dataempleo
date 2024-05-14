import { formatNumbers } from "./formatNumbers";

import { GiGraduateCap } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { MdBackpack } from "react-icons/md";

const sliderData = [
    {
        name: "Promedio anual de Colocaciones (Abr23 - Mar24)",
        icon: <MdBackpack />,
        numericValue: "Hasta bachillerato - mujeres",
        percentValue: formatNumbers(7000),
    },
    {
        name: "Promedio anual de Colocaciones (Abr23 - Mar24)",
        icon: <FaUserGraduate />,
        numericValue: "Universitario, técnicos y técnologos - mujeres",
        percentValue: formatNumbers(4533),
    },
    {
        name: "Promedio anual de Colocaciones (Abr23 - Mar24)",
        icon: <GiGraduateCap />,
        numericValue: "Posgrado - mujeres",
        percentValue: formatNumbers(263),
    },
    {
        name: "Promedio anual de Colocaciones (Abr23 - Mar24)",
        icon: <MdBackpack />,
        numericValue: "Hasta bachillerato - hombres",
        percentValue: formatNumbers(7603),
    },
    {
        name: "Promedio anual de Colocaciones (Abr23 - Mar24)",
        icon: <FaUserGraduate />,
        numericValue: "Universitario, técnicos y técnologos - hombres",
        percentValue: formatNumbers(3683),
    },
    {
        name: "Promedio anual de Colocaciones (Abr23 - Mar24)",
        icon: <GiGraduateCap />,
        numericValue: "Posgrado - hombres",
        percentValue: formatNumbers(267),
    },
]

export { sliderData };