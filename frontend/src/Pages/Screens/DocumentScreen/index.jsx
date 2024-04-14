import React from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";

import { AppContext } from '../../../Context';
import { DocumentInfoContainer } from '../../components/DocumentInfoContainer';


const DocumentScreen = () => {
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

    return(
        <>  
            <DocumentInfoContainer/>
        </>
    );
}

export { DocumentScreen };