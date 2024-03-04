//Dependencies
import React from "react";
import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

//App
import './App.css'
import "./App.css"

//Context
import { AppProvider } from "../../Context";


//Screens
import { MainContainer } from "../components/MainContainer";
import { Home } from "../Screens/Home";

import { Navbar } from "../components/Nabvar";
import { NavBarResponsive } from "../components/NavBarResponsive";
import { Footer } from "../components/Footer";
import { AccesibilityCard } from "../components/AccesibilityCard";
import { GovNavbar } from "../components/GovNavbars";


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
            <HashRouter>
                <Wrapper>
                    <GovNavbar/>
                    <Navbar/>
                    <NavBarResponsive/>
                    <AccesibilityCard/>
                    <MainContainer>
                        <AppRoutes/>
                    </MainContainer>
                    <Footer/>
                    
                </Wrapper>
            </HashRouter>
        </AppProvider>
    );
}

export default App;

