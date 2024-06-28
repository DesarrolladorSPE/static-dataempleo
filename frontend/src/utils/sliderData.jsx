import { formatNumbers } from "./formatNumbers";

import { GiGraduateCap } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { MdBackpack } from "react-icons/md";

const sliderData = [
    {
        name: "Promedio anual de colocaciones (jun2023 - may2024)",
        icon: <MdBackpack />,
        numericValue: "Hasta bachillerato - mujeres",
        percentValue: formatNumbers(7012),
    },
    {
        name: "Promedio anual de colocaciones (jun2023 - may2024)",
        icon: <FaUserGraduate />,
        numericValue: "Universitario, técnicos y técnologos - mujeres",
        percentValue: formatNumbers(4520),
    },
    {
        name: "Promedio anual de colocaciones (jun2023 - may2024)",
        icon: <GiGraduateCap />,
        numericValue: "Posgrado - mujeres",
        percentValue: formatNumbers(266),
    },
    {
        name: "Promedio anual de colocaciones (jun2023 - may2024)",
        icon: <MdBackpack />,
        numericValue: "Hasta bachillerato - hombres",
        percentValue: formatNumbers(7635),
    },
    {
        name: "Promedio anual de colocaciones (jun2023 - may2024)",
        icon: <FaUserGraduate />,
        numericValue: "Universitario, técnicos y técnologos - hombres",
        percentValue: formatNumbers(3709),
    },
    {
        name: "Promedio anual de colocaciones (jun2023 - may2024)",
        icon: <GiGraduateCap />,
        numericValue: "Posgrado - hombres",
        percentValue: formatNumbers(268),
    },
]

export { sliderData };