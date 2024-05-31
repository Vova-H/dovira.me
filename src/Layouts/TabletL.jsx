import React, {useLayoutEffect} from 'react';
import Header from "../components/TabletL/Header/Header";
import Banner from "../components/TabletL/Banner/Banner";
import OurServices from "../components/TabletL/OurServices/OurServices";
import WhyChoose from "../components/TabletL/WhyChoose/WhyChoose";
import Priorities from "../components/TabletL/Priorities/Priorities";
import GetStartedToday from "../components/TabletL/GetStartedToday/GetStartedToday";
import Contact from "../components/TabletL/Contact/Contact";
import Footer from "../components/TabletL/Footer/Footer";
import 'aos/dist/aos.css'
import AOS from "aos";
import classes from "../styles/app.tabletL.module.css"

const TabletL = (props) => {

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

export default TabletL;
