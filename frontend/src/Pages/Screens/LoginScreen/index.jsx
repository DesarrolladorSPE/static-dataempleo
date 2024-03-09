import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";

import "./styles.css";
import { SubTitle } from "../../components/SubTitle";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const context = React.useContext(AppContext);

    const [values, setValues] = React.useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    
    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            axios.post(`${context.apiUri}/user/login`, values)
                .then(response => {
                    const {data} = response;

                    if(data.Status === "Success") {
                        navigate("/");
                    } else {
                        alert(response.data.Error);
                    }
                })
                .then(err => {alert(err)})
        } 
        catch (err) {
            console.log(err);
            alert(err);
        }
    }

    return(
		<>
			<SubTitle
                    textAlign="center"
			>
				Bienvenido a  la Bodega de Archivos del SPE
			</SubTitle>
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