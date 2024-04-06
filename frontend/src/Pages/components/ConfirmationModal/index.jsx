import React from "react";
import { AppContext } from "../../../Context";
import { SubTitle } from "../SubTitle";

import { ButtonCard } from "../ButtonCard";

import "./styles.css";

const ConfirmationModal = ({onConfirm, onCancel, title}) => {
    const context = React.useContext(AppContext)

    if(context.openConfirmationModal) {
        return(
            <div className="modal-container">
                <div className="modal-buttons-container">
                    <SubTitle textAlign="center">{title}</SubTitle>

                    <div className="info-container">
                        <p>Esta acción no podrá ser cancelada</p>
                    </div>

                    <div className="flex-row">
                        <ButtonCard
                            title="Confirmar"
                            type="submit"
                            onClick={onConfirm}
                        >
                            Confirmar
                        </ButtonCard>

                        <ButtonCard
                            title="Cancelar"
                            onClick={onCancel}
                        >
                            Cancelar
                        </ButtonCard>
                    </div>
                </div>
            </div>
        );
    }


}

export { ConfirmationModal };