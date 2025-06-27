import React, {useLayoutEffect} from 'react';
import classes from "../styles/app.tablet.module.css";

import 'aos/dist/aos.css'
import AOS from "aos";
import Header from "../components/sections/Tablet/Header/Header";
import Banner from "../components/sections/Tablet/Banner/Banner";
import OurServices from "../components/sections/Tablet/OurServices/OurServices";
import WhyChoose from "../components/sections/Tablet/WhyChoose/WhyChoose";
import Priorities from "../components/sections/Tablet/Priorities/Priorities";
import GetStartedToday from "../components/sections/Tablet/GetStartedToday/GetStartedToday";
import Contact from "../components/sections/Tablet/Contact/Contact";
import Footer from "../components/sections/Tablet/Footer/Footer";

const Tablet = (props) => {

    const ourServicesRef = props.ourServicesRef;
    const whyChooseUsRef = props.whyChooseUsRef;
    const ourPrioritiesRef = props.ourPrioritiesRef;
    const downloadAppRef = props.downloadAppRef;
    const contactUsRef = props.contactUsRef;
    useLayoutEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            anchorPlacement: 'top',
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

export default Tablet;
