import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";

import { SubTitle } from "../../components/SubTitle";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Title";

const RegisterScreen = () => {
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