import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";

import { Title } from "../../components/Title";


import { useNavigate } from "react-router-dom";
import { HomeInfoContainer } from "../../components/HomeInfoContainer";

import "./styles.css"


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
                    navigate("/home");
                }
            })
            .catch(err => {console.log(err)})
    }, [])

    return (
        <>
            <Title>
                DATAEMPLEO
            </Title>
            <HomeInfoContainer/>
        </>
    );
}

export { Home };