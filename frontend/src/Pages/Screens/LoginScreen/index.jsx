import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";

import { SubTitle } from "../../components/SubTitle";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { handleNotifications } from "../../../utils/handleNotifications";
import { scrollToValue } from "../../../utils/scrollToValue";


const LoginScreen = () => {
    const context = React.useContext(AppContext);
    scrollToValue();

    const [values, setValues] = React.useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${context.apiUri}/user/login`, values)
            .then(response => {
                const {data} = response;

                if(data.Status === "Success") {
                    navigate("/dashboard");
                    handleNotifications("success", "Sesión Iniciada Correctamente")
                } else {
                    handleNotifications("error", data.Error)
                }
            })
            .catch(err => {
                handleNotifications("error", err.message)})
    }

    return(
		<>
			<div className="login-container">
				<SubTitle
                    textAlign="center"
				>
					Iniciar Sesion
				</SubTitle>

				<form className="login-form-container" onSubmit={handleSubmit}>
					<div className="form-input-container">
						<label htmlFor="email">Correo:</label>
						<input
                            type="email"
                            placeholder="Ingrese su correo"
                            name="email"
                            onChange={(event) => {setValues({...values, email: event.target.value})}}
                        />
					</div>
					<div className="form-input-container">
						<label htmlFor="password">Contraseña:</label>
						<input
                            type="password"
                            placeholder="Ingrese su contraseña"
                            name="password"
                            onChange={(event) => {setValues({...values, password: event.target.value})}}
                        />
					</div>
					<button type="submit">Iniciar sesion</button>
				</form>
			</div>
		</>
    );
}

export { LoginScreen }