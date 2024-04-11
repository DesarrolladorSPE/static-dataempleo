import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";
import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import { DateCard } from "../../components/DateCard";
import { DashboardInfoContainer } from "../../components/DashboardInfoContainer";

import "./styles.css"


const DashboardScreen = () => {
    const context = React.useContext(AppContext);

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    React.useEffect(() => {
        axios.get(`${context.apiUri}/user/`)
            .then(response => {
                const {data} = response;

                if(data.Status === "Success") {
                    context.setAuth(true);
                    context.setName(data.name);
                } else {
                    context.setAuth(false);
                    context.setMessage(data.Error);
                    navigate("/home");
                }
            })
            .catch(err => {
                navigate("/home");
                console.log(err)
            })
    }, []) 

    return (
        <>
            <DateCard/>

            <Title>
                Dashboard de DATAEMPLEO
            </Title>
            <DashboardInfoContainer/>
        </>
    );
}

export { DashboardScreen };