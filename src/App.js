import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import "./styles/variables.css"
import Banner from "./components/Banner/Banner";
import classes from "./app.module.css"
import Header from "./components/Header/Header";
import React from "react";
import OurServices from "./components/OurServices/OurServices";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Priorities from "./components/Priorities/Priorities";

function App() {
    return (
        <div className={classes.container}>
            <div className={classes.bannerSection}>
                <Header/>
                <Banner/>
            </div>
            <OurServices/>
            <WhyChoose/>
            <Priorities/>
        </div>
    );
}

export default App;
