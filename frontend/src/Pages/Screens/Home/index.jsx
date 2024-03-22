import "./styles.css"
import { Title } from "../../components/Title";
import { AllInfoContainer } from "../../components/AllInfoContainer";
import { DateCard } from "../../components/DateCard";


import React from "react";
import { AppContext } from "../../../Context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
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
                    navigate("/login");
                }
            })
            .catch(err => {console.log(err)})
    }, []) 

    return (
        <>
            <DateCard/>

            <Title>
                Bienvenido {context.name}
            </Title>
            <button onClick={context.handleLogout}>Cerrar Sesion</button>

            <Title>
                DATAEMPLEO
            </Title>
            <AllInfoContainer/>
        </>
    );
}

export { Home };