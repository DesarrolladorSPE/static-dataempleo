import React from "react";
import { FiltersWrapper } from "../FiltersWrapper";
import { AppContext } from "../../../Context";

import { FiltersOptionCard } from "../FiltersOptionCard";

import "./styles.css";

const FiltersInputs = () => {
    const context = React.useContext(AppContext);

    return(
        <FiltersWrapper
            flexDirection={"column"}
            padding={20}
            gap={5}
        >
            <FiltersOptionCard
                id={"salary-range"}
                title={"Rango Salarial"}
                array={context.vacantesData?.filters?.rangoSalarial}
                onChange={(value) => context.handleFilterChange("RANGO_SALARIAL", value)}
            />

            <FiltersOptionCard
                id={"provider"}
                title={"Prestador"}
                array={context.vacantesData?.filters?.prestador}
                onChange={(value) => context.handleFilterChange("NOMBRE_PRESTADOR", value)}
            />

            <label htmlFor="telecommuting">Teletrabajo</label>
            <select 
                name="telecommuting" 
                id="telecommuting"
                onChange={(event) => context.handleFilterChange("TELETRABAJO", event.target.value)}
            >
                <option value="">Todo</option>
                <option value={1}>Si</option>
                <option value={0}>No</option>
            </select>

            <FiltersOptionCard
                id={"type-of-contract"}
                title={"Tipo Contrato"}
                array={context.vacantesData?.filters?.tipoContrato}
                onChange={(value) => context.handleFilterChange("TIPO_CONTRATO", value)}
            />

            <FiltersOptionCard
                id={"educational-level"}
                title={"Nivel de Estudios"}
                array={context.vacantesData?.filters?.nivelDeEstudios}
                onChange={(value) => context.handleFilterChange("NIVEL_ESTUDIOS", value)}
            />
        </FiltersWrapper>
    );
}

export { FiltersInputs };