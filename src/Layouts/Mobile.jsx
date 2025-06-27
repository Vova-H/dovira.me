import React, {useLayoutEffect} from 'react';
import classes from "../styles/app.mobile.module.css";
import Header from "../components/sections/Mobile/Header/Header";
import Banner from "../components/sections/Mobile/Banner/Banner";
import OurServices from "../components/sections/Mobile/OurServices/OurServices";
import WhyChoose from "../components/sections/Mobile/WhyChoose/WhyChoose";
import Priorities from "../components/sections/Mobile/Priorities/Priorities";
import GetStartedToday from "../components/sections/Mobile/GetStartedToday/GetStartedToday";
import Contact from "../components/sections/Mobile/Contact/Contact";
import Footer from "../components/sections/Mobile/Footer/Footer";
import 'aos/dist/aos.css'
import AOS from "aos";

const Mobile = (props) => {

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

export default Mobile;
