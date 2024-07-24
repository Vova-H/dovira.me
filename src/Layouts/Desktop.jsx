import React, {useLayoutEffect} from 'react';
import classes from "../styles/app.desktop.module.css";
import Header from "../components/Desktop/Header/Header";
import Banner from "../components/Desktop/Banner/Banner";
import OurServices from "../components/Desktop/OurServices/OurServices";
import WhyChoose from "../components/Desktop/WhyChoose/WhyChoose";
import Priorities from "../components/Desktop/Priorities/Priorities";
import GetStartedToday from "../components/Desktop/GetStartedToday/GetStartedToday";
import Contact from "../components/Desktop/Contact/Contact";
import Footer from "../components/Desktop/Footer/Footer";
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
