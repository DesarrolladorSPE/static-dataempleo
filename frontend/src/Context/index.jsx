import React from "react";
import PropTypes from "prop-types";



export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    //API -- Cambiar el valor de la variable api segun la infraestructura de produccion
    const domain = "http://localhost:3080";
	const api = `${domain}/api/v1`;

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
        setCurrentPage(1);
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
                "/vacantes/resultados"
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
    }, [activeHighContrast])

    const handleColorsByFilters = (type = activeButton) => {
        setActiveButton(type);
        const root = document.documentElement;        

        if(activeHighContrast) {
            root.style.setProperty("--navbar-color", "#000000");
            root.style.setProperty("--navbar-responsive-color", "rgba(0, 0, 0, 0.75)");
            root.style.setProperty("--main-body-color", "#737373");
            root.style.setProperty('--main-title-color', 'rgba(255, 255, 255,1)');
            root.style.setProperty('--all-info-container-color', '#353535');
            root.style.setProperty('--input-and-info-container-color', '#000000');
            root.style.setProperty('--municipios-and-result-border-clicked', '#737373');
            root.style.setProperty("--tool-tip-map-text-color", "#FFFFFF");
            root.style.setProperty("--confirm-color", "#737373");
            root.style.setProperty("--cancel-color", "#737373");
            root.style.setProperty("--time-color", "#737373");
            root.style.setProperty("--result-subtitle-card", "#000000");
            root.style.setProperty("--gov-accesibility-card", "#000000");
            return;
        }

        switch (type) {
            default:
                root.style.setProperty("--navbar-color", "#3366cc");
                root.style.setProperty("--navbar-responsive-color", "rgba(51, 102, 204, 0.75)");
                root.style.setProperty("--main-body-color", "#EEFAFF");
                root.style.setProperty('--main-title-color', '#681d35');
                root.style.setProperty('--all-info-container-color', 'rgba(255,255,255,0.25)');
                root.style.setProperty('--input-and-info-container-color', 'rgba(236,236,236,0.65)');
                root.style.setProperty('--municipios-and-result-border-clicked', '#3366CC');
                root.style.setProperty("--tool-tip-map-text-color", "#737373");
                root.style.setProperty("--confirm-color", "#069169");
                root.style.setProperty("--cancel-color", "#D31F3F");
                root.style.setProperty("--time-color", "#3366cc");
                root.style.setProperty("--result-subtitle-card", "#3366CC");
                root.style.setProperty("--gov-accesibility-card", "#681d35");
            break;
        }
    }


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