import React, {useEffect} from 'react';
import classes from "../app.mobile.module.css";
import Header from "../components/Mobile/Header/Header";
import Banner from "../components/Mobile/Banner/Banner";
import OurServices from "../components/Mobile/OurServices/OurServices";
import WhyChoose from "../components/Mobile/WhyChoose/WhyChoose";
import Priorities from "../components/Mobile/Priorities/Priorities";
import GetStartedToday from "../components/Mobile/GetStartedToday/GetStartedToday";
import Contact from "../components/Mobile/Contact/Contact";
import Footer from "../components/Mobile/Footer/Footer";
import 'aos/dist/aos.css'
import AOS from "aos";

const Mobile = (props) => {

    const ourServicesRef = props.ourServicesRef;
    const whyChooseUsRef = props.whyChooseUsRef;
    const ourPrioritiesRef = props.ourPrioritiesRef;
    const downloadAppRef = props.downloadAppRef;
    const contactUsRef = props.contactUsRef;
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom',
        });
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
                <Banner scrollTo={props.scrollTo} refs={{downloadAppRef}}/>
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
