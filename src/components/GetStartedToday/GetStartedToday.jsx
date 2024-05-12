import React, {forwardRef} from 'react';

import classes from './getStartedTodat.module.css';
import phoneImage from "../../assets/images/getStartedToday/phone.png"
import apple from "../../assets/images/getStartedToday/apple.png"
import android from "../../assets/images/getStartedToday/android.png"

const GetStartedToday = forwardRef((props, ref) => {
    return (
        <div className={classes.container} ref={ref}>
            <div className={classes.leftSide}>
                <img src={phoneImage} className={classes.image} alt="Phone"/>
            </div>
            <div className={classes.rightSide}>
                <div className={classes.title}>Get started today!</div>
                <div className={classes.description}>Experience the convenience and peace of mind that Medivisit offers.
                    Download the app now and take control of your health journey with just a few taps. Your health is
                    important to us, and we're here to help every step of the way.
                </div>
                <div className={classes.links}>
                    <a href="https://apps.apple.com/" style={{marginRight: "20px"}}>
                        <img src={apple} alt="Apple Sotore"/>
                    </a>
                    <a href="https://play.google.com/">
                        <img src={android} alt="Play market"/>
                    </a>
                </div>
            </div>
        </div>
    );
});

export default GetStartedToday;
