import React from "react";
import axios from "axios";

import PropTypes from "prop-types";

import { actualMonth, actualYear } from "../utils/dateFunctions";
import { graphLabels } from "../utils/chartTypes";
import { handleColorsByFilters } from "../utils/handleColors";


export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    //API -- Cambiar el valor de la variable api segun la infraestructura de produccion
    const domain = import.meta.env.VITE_API_DOMAIN;
    const apiStructure = import.meta.env.VITE_API_STRUCTURE;

    const api = `${domain}/${apiStructure}/v1`;

	//-------------------------------------
    const [apiUri, setApiUri] = React.useState(api);

    //LOADING, ERROR
    const [loading, setLoading] = React.useState(null);

    //Login Auth
    const [auth, setAuth] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [name, setName] = React.useState("");

    //Logout
    const handleLogout = () => {
        axios.get(`${apiUri}/user/logout`)
            .then(res => {
                location.reload(true);
            })
            .catch(err => {console.log(err)})
    }


    // RESPONSE:
    const [responseData, setResponseData] = React.useState({});

    const fetchData = async (endpoint) => {
        try {
            const response = await fetch(`${apiUri}/${endpoint}`);

            if (!response.status === 200) {
                throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
            }
    
            return await response.json();

        }
        catch (err) {
            throw new Error(`Error fetching ${endpoint}: ${err.message}`);
        }
    };

    const fetchAllData = async () => {
        try {
            setLoading(true);
            const filterParams = new URLSearchParams();

            const endpoints = [
                "/graph"
                /* otros endpoints */
            ];

            // Realizar todas las solicitudes en paralelo
            const resultsArray = await Promise.all(endpoints.map(fetchData));

            const combinedResults = resultsArray.reduce((acc, result) => {
                return { ...acc, ...result };
            }, {});
            setResponseData(combinedResults);
        } 
        catch (err) {
            alert(err.message);
        }
        finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchAllData();
    }, []);

    // Valores de la Grafica
    const [editingGraph, setEditingGraph] = React.useState(false);
    const [graphValues, setGraphValues] = React.useState({
        title: "",
        year: actualYear,
        month: actualMonth,
        grapLabelsType: "ofertasRegistradas",
        graphType: "bar",
        description: "",
        values: [20000, 10000, 4, 7, 8, 1],
    })
    
    const handleGraphValuesChange = (key, value) => {
        const numericValue = parseInt(value) || value;

        setGraphValues((prevValues) => ({ 
            ...prevValues, 
            [key]: numericValue
         }));
    };

    React.useEffect(() => {
        handleGraphValuesChange("graphType", graphLabels[graphValues.grapLabelsType].type)
    }, [graphValues.grapLabelsType]);
    

    //CAMBIO DE COLORES
    const [activeHighContrast, setActiveHighContrast] = React.useState(false);
    React.useEffect(() => {
        handleColorsByFilters(activeHighContrast);
    }, [activeHighContrast]);


    // Screen Width
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    // Navbar Responsive
    const [toggleNavBarResponsive, setToggleNavBarResponsive] = React.useState(false);

    // Modal de Confirmacion
    const [openConfirmationModal, setOpenConfirmationModal] = React.useState({
        status: false,
        title: "",
        onConfirm: null,
        onCancel: null,
    });

    



    return (
        <AppContext.Provider
            value={{
                apiUri,
                loading,
                setLoading,
                
                auth,
                setAuth,
                handleLogout,
                
                name,
                setName,

                message,
                setMessage,

                //NavBar Responsive
                toggleNavBarResponsive,
                setToggleNavBarResponsive,

                //Tamaño de la pantalla
                windowWidth,
                setWindowWidth,


                //Informacion desde el serveidor
                responseData,
                setResponseData,

                //COLORES POR FILTRO
                handleColorsByFilters,
                activeHighContrast,
                setActiveHighContrast,

                // Valores de la Grafica
                graphValues,
                setGraphValues,
                handleGraphValuesChange,
                editingGraph,
                setEditingGraph,

                //Modal de confirmación
                openConfirmationModal,
                setOpenConfirmationModal,

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}