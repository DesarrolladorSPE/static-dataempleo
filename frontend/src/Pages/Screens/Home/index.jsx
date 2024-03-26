import React from "react";
import { AppContext } from "../../../Context";

import { Title } from "../../components/Title";
import { DateCard } from "../../components/DateCard";

import "./styles.css"

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HomeInfoContainer } from "../../components/HomeInfoContainer";

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
            <DateCard/>

            <Title>
                DATAEMPLEO
            </Title>
            <HomeInfoContainer/>
        </>
    );
}

export { Home };