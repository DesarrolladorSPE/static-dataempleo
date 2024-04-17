import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";

import { SubTitle } from "../../components/SubTitle";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Title";
import { AuthWrapper } from "../../components/AuthWrapper";
import { handleNotifications } from "../../../utils/handleNotifications";

const RegisterScreen = () => {
    const context = React.useContext(AppContext);
    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            axios.post(`${context.apiUri}/user/register`, values)
                .then(response => {
                    const {data} = response;

                    if(data.Status === "Success") {
                        navigate("/login");
                        handleNotifications("success", "Usuario Creado Correctamente")
                    }
                })
                .catch(err => {throw new Error(err)})
        } 
        catch (err) {
            handleNotifications("error", err);
        }
    }

    return(
		<AuthWrapper>
			<Title>
				Registrar Nuevo Usuario Administrador
			</Title>
			<div className="login-container">
				<SubTitle
                    textAlign="center"
				>
					Registro
				</SubTitle>

				<form className="login-form-container" onSubmit={handleSubmit}>
                    <div className="form-input-container">
						<label htmlFor="name">Nombre:</label>
						<input
                            type="text"
                            placeholder="Ingrese su nombre"
                            name="name"
                            onChange={(event) => {setValues({...values, name: event.target.value})}}
                            required
                        />
					</div>
					<div className="form-input-container">
						<label htmlFor="email">Correo:</label>
						<input
                            type="email"
                            placeholder="Ingrese su correo"
                            name="email"
                            onChange={(event) => {setValues({...values, email: event.target.value})}}
                            required
                        />
					</div>
					<div className="form-input-container">
						<label htmlFor="password">Contraseña:</label>
						<input
                            type="password"
                            placeholder="Ingrese su contraseña"
                            name="password"
                            onChange={(event) => {setValues({...values, password: event.target.value})}}
                            required
                        />
					</div>
					<button type="submit">Registrarse</button>
				</form>
			</div>
		</AuthWrapper>
    );
}

export { RegisterScreen }