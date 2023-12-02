//Dependencies
import React from "react";
import { BrowserRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

//App
import './App.css'
import "./App.css"

//Context
import { AppProvider } from "../../Context";


//Screens
import { MainContainer } from "../components/MainContainer";
import { Home } from "../Screens/Home";

import { Navbar } from "../components/nabvar";
import { NavBarResponsive } from "../components/NavBarResponsive";
import { Footer } from "../components/Footer";


const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname]);

    return children;
}

const AppRoutes = () => {
    let routes = useRoutes([
        {path: "/", element: <Home/>},
        {path: "/*", element: <Navigate to={"/"}/>},
    ]);
    
    return routes;
}

const App = () => {

    return (
        <AppProvider>
            <BrowserRouter>
                <Wrapper>

                    <Navbar/>
                    <NavBarResponsive/>
                    <MainContainer>
                        <AppRoutes/>
                    </MainContainer>
                    <Footer/>
                </Wrapper>
            </BrowserRouter>
        </AppProvider>
    );
}

export default App;

