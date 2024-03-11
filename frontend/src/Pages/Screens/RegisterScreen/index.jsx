import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";

import "./styles.css";
import { SubTitle } from "../../components/SubTitle";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
    const context = React.useContext(AppContext);

    const [values, setValues] = React.useState({
        name: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            axios.post(`${context.apiUri}/user/register`, values)
                .then(response => {
                    const {data} = response;

                    if(data.Status === "Success") {
                        navigate("/login");
                    }
                })
                .catch(err => {throw new Error(err)})
        } 
        catch (err) {
            alert(err);
        }
    }

    return(
		<>
			<SubTitle
                    textAlign="center"
			>
				Bienvenido a DataEmpleo
			</SubTitle>
			<div className="login-container">
				<SubTitle
                    textAlign="center"
				>
					Registrarse
				</SubTitle>

				<form className="login-form-container" onSubmit={handleSubmit}>
                    <div className="form-input-container">
						<label htmlFor="name">Nombre:</label>
						<input
                            type="text"
                            placeholder="Ingrese su nombre"
                            name="name"
                            onChange={(event) => {setValues({...values, name: event.target.value})}}
                        />
					</div>
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
					<button type="submit">Registrarse</button>
				</form>
			</div>
		</>
    );
}

export { RegisterScreen }