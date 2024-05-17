import React, {forwardRef, useEffect} from 'react';

import classes from './getStartedTodat.module.css';
import phoneImage from "../../../assets/images/getStartedToday/phone.png"
import apple from "../../../assets/images/getStartedToday/apple.png"
import android from "../../../assets/images/getStartedToday/android.png"
import circle1 from "../../../assets/images/getStartedToday/1.png"
import circle2 from "../../../assets/images/getStartedToday/2.png"
import circle3 from "../../../assets/images/getStartedToday/3.png"
import 'aos/dist/aos.css'
import AOS from "aos";

const GetStartedToday = forwardRef((props, ref) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom'
        });
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.phoneWrapper}>
                <img src={phoneImage} className={classes.phoneImage} alt="Phone" ref={ref} data-aos="fade-down" />
                <img src={circle1} className={classes.circle1} alt="Cirlce" ref={ref} data-aos="fade-up" />
                <img src={circle2} className={classes.circle2} alt="Cirlce" ref={ref} data-aos="fade-right"/>
                <img src={circle3} className={classes.circle3} alt="Cirlce" ref={ref} data-aos="fade-left"/>
            </div>

            <div className={classes.rightSide}>
                <div className={classes.title} data-aos="fade-left">Get started today!</div>
                <div className={classes.description} data-aos="fade-left">Experience the convenience and peace of mind that Medivisit offers.
                    Download the app now and take control of your health journey with just a few taps. Your health is
                    important to us, and we're here to help every step of the way.
                </div>
                <div className={classes.links}>
                    <a href="https://apps.apple.com/" style={{marginRight: "20px"}} data-aos="fade-zoom-in" data-aos-duration="2000">
                        <img src={apple} alt="Apple Sotore"/>
                    </a>
                    <a href="https://play.google.com/" data-aos="fade-zoom-in" data-aos-duration="2000">
                        <img src={android} alt="Play market"/>
                    </a>
                </div>
            </div>
        </div>
    );
});

export default GetStartedToday;
