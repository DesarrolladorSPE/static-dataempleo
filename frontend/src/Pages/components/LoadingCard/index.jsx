import React from "react";
import { AppContext } from "../../../Context";

import "./styles.css";

const LoadingCardBig = () => {
    const context = React.useContext(AppContext)

    if(context.loading){
        return(
            <div className="loading-card-big-container animation">

                <div className="primary-container">
                    <p className="animation2"></p>
                    <p className="animation2"></p>
                    <p className="animation2"></p>
                </div>
                <div className="secondary-container">
                    <p className="animation2"></p>
                    <p className="animation2"></p>
                </div>
            </div>
        );
    }
}

const LoadingCardSmall = () => {
    const context = React.useContext(AppContext)

    if(context.loading){
        return(
            <div className="loading-card-small-container animation">
                <p className="animation2"></p>
                <p className="animation2"></p>
            </div>
        );
    }
}

export { LoadingCardBig, LoadingCardSmall };