import { formatNumbers } from "./formatNumbers";

import { GiGraduateCap } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { MdBackpack } from "react-icons/md";

const sliderData = [
    {
        name: "Promedio anual de colocaciones (may2023 - abr2024)",
        icon: <MdBackpack />,
        numericValue: "Hasta bachillerato - mujeres",
        percentValue: formatNumbers(9942),
    },
    {
        name: "Promedio anual de colocaciones (may2023 - abr2024)",
        icon: <FaUserGraduate />,
        numericValue: "Universitario, técnicos y técnologos - mujeres",
        percentValue: formatNumbers(8136),
    },
    {
        name: "Promedio anual de colocaciones (may2023 - abr2024)",
        icon: <GiGraduateCap />,
        numericValue: "Posgrado - mujeres",
        percentValue: formatNumbers(802),
    },
    {
        name: "Promedio anual de colocaciones (may2023 - abr2024)",
        icon: <MdBackpack />,
        numericValue: "Hasta bachillerato - hombres",
        percentValue: formatNumbers(10409),
    },
    {
        name: "Promedio anual de colocaciones (may2023 - abr2024)",
        icon: <FaUserGraduate />,
        numericValue: "Universitario, técnicos y técnologos - hombres",
        percentValue: formatNumbers(5759),
    },
    {
        name: "Promedio anual de colocaciones (may2023 - abr2024)",
        icon: <GiGraduateCap />,
        numericValue: "Posgrado - hombres",
        percentValue: formatNumbers(555),
    },
]

export { sliderData };