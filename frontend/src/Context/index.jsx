import React from "react";
import PropTypes from "prop-types";



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


    // RESPONSE:
    const [responseData, setResponseData] = React.useState({});

    const [filters, setFilters] = React.useState({
        RANGO_SALARIAL: "",
        NOMBRE_PRESTADOR: "",
        TELETRABAJO: "",
        TIPO_CONTRATO: "",
        NIVEL_ESTUDIOS: "",
        DEPARTAMENTO: "",
        HIDROCARBUROS: "",
        PLAZA_PRACTICA: "",
        BUSQUEDA: "",
        DESCRIPCION_VACANTE: "",
    });

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
    };

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
            const filterParams = new URLSearchParams(filters);

            const endpoints = [
                // "/vacantes/resultados"
                /* otros endpoints */
            ];

            // Realizar todas las solicitudes en paralelo
            const resultsArray = await Promise.all(endpoints.map(fetchData));

            const combinedResults = resultsArray.reduce((acc, result) => {
                return { ...acc, ...result };
            }, {});
            setResponseData(combinedResults);
            console.log(responseData);
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
    }, [filters]);

    //CAMBIO DE COLORES
    const [activeButton, setActiveButton] = React.useState(1);
    const [activeHighContrast, setActiveHighContrast] = React.useState(false);

    React.useEffect(() => {
        handleColorsByFilters();
    }, [activeButton, activeHighContrast]);

    const handleColorsByFilters = () => {
        const root = document.documentElement;
        const normalStyles = {
            "--navbar-color": "#3366cc",
            "--main-body-color": "#EEFAFF",
            "--main-title-color": "#681d35",
            "--light-gray-color": "rgba(236,236,236,0.65)",
            "--confirm-color": "#069169",
            "--cancel-color": "#D31F3F",
            "--time-color": "#3366cc",
            "--gov-accesibility-card": "#681d35",
            "--black-to-white-color": "#000000",
            "--white-to-black-color": "#FFFFFF",
            "--lines-color": "#681d35",
            "--lines-color2": "#681d35",
            "--text-color": "#717171"
        };
        const highContrastStyles = {
            "--navbar-color": "#000000",
            "--main-body-color": "#737373",
            "--main-title-color": "rgba(255, 255, 255,1)",
            "--light-gray-color": "#000000",
            "--confirm-color": "#737373",
            "--cancel-color": "#737373",
            "--time-color": "#737373",
            "--gov-accesibility-card": "#000000",
            "--black-to-white-color": "#FFFFFF",
            "--white-to-black-color": "#000000",
            "--lines-color": "#FFFFFF",
            "--lines-color2": "#FFFFFF",
            "--text-color": "#FFFFFF"
        };

        const styles = activeHighContrast ? highContrastStyles : normalStyles;
        Object.entries(styles).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    };


    // Screen Width
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    const [toggleNavBarResponsive, setToggleNavBarResponsive] = React.useState(false);



    return (
        <AppContext.Provider
            value={{
                apiUri,
                loading,
                setLoading,

                //NavBar Responsive
                toggleNavBarResponsive,
                setToggleNavBarResponsive,

                //Tamaño de la pantalla
                windowWidth,
                setWindowWidth,

                //Filtros y paginacion
                setFilters,

                //Informacion desde el serveidor
                responseData,
                setResponseData,

                //COLORES POR FILTRO
                handleColorsByFilters,
                activeButton,
                setActiveButton,
                activeHighContrast,
                setActiveHighContrast,

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider}