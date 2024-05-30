//Dependencies
import React from "react";
import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//App
import './App.css'

//Context
import { AppProvider } from "../../Context";


//Screens
import { MainContainer } from "../components/MainContainer";
import { Home } from "../Screens/Home";

import { NavBarResponsive } from "../components/NavBarResponsive";
import { Footer } from "../components/Footer";
import { AccesibilityCard } from "../components/AccesibilityCard";
import { GovNavbar } from "../components/GovNavbars";
import { ToastContainer } from "react-toastify";
import { NavImagesCard } from "../components/NavImagesCard";
import { SliderContainer } from "../components/SliderContainer";

const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname]);

    return children;
}

const AppRoutes = () => {
    let routes = useRoutes([
        {path: "/home", element: <Home/>},
        {path: "/*", element: <Navigate replace to={"/home"}/>},
    ]);
    
    return routes;
}

const App = () => {
    return (
        <AppProvider>
            <HashRouter>
                <Wrapper>
                    <GovNavbar/>
                    <AccesibilityCard/>
                    <MainContainer>
                        <NavImagesCard/>
                        <SliderContainer/>
                        <NavBarResponsive/>
                        <AppRoutes/>
                    </MainContainer>
                    <ToastContainer/>
                    <Footer/>
                </Wrapper>
            </HashRouter>
        </AppProvider>
    );
}

export default App;

