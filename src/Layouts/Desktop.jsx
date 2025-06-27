import React, {useLayoutEffect} from 'react';
import classes from "../styles/app.desktop.module.css";
import Header from "../components/sections/Desktop/Header/Header";
import Banner from "../components/sections/Desktop/Banner/Banner";
import OurServices from "../components/sections/Desktop/OurServices/OurServices";
import WhyChoose from "../components/sections/Desktop/WhyChoose/WhyChoose";
import Priorities from "../components/sections/Desktop/Priorities/Priorities";
import GetStartedToday from "../components/sections/Desktop/GetStartedToday/GetStartedToday";
import Contact from "../components/sections/Desktop/Contact/Contact";
import Footer from "../components/sections/Desktop/Footer/Footer";
import 'aos/dist/aos.css'
import AOS from "aos";

const Desktop = (props) => {
    const ourServicesRef = props.ourServicesRef;
    const whyChooseUsRef = props.whyChooseUsRef;
    const ourPrioritiesRef = props.ourPrioritiesRef;
    const downloadAppRef = props.downloadAppRef;
    const contactUsRef = props.contactUsRef;

    useLayoutEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            anchorPlacement: 'top-bottom',
        });
        return () => {
            AOS.refresh();
        };
    }, []);


    return (
        <div className={classes.container}>
            <div className={classes.bannerSection}>
                <Header scrollTo={props.scrollTo}
                        refs={{
                            ourServicesRef,
                            whyChooseUsRef,
                            ourPrioritiesRef,
                            downloadAppRef,
                            contactUsRef
                        }}
                />
                <Banner scrollTo={props.scrollTo} refs={{ourPrioritiesRef}}/>
            </div>
            <OurServices ref={props.ourServicesRef}/>
            <WhyChoose ref={props.whyChooseUsRef}/>
            <Priorities ref={props.ourPrioritiesRef}/>
            <GetStartedToday ref={props.downloadAppRef}/>
            <Contact ref={props.contactUsRef}/>
            <Footer/>
        </div>
    );
};

export default Desktop;
