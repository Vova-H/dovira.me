import React, {forwardRef} from 'react';

import classes from './getStartedToday.module.css';
import phone from "../../../assets/images/getStartedToday/phone.png"
import apple from "../../../assets/images/getStartedToday/mobile/button.svg"
import android from "../../../assets/images/getStartedToday/mobile/button2.svg"


const GetStartedToday = forwardRef((props, ref) => {
    return (
        <div className={classes.container} ref={ref}>

            <div className={classes.title}>Get started today!</div>
            <div className={classes.description}>Experience the convenience and peace of mind that Medivisit offers.
                Download the app now and take control of your health journey with just a few taps. Your health is
                important to us, and we're here to help every step of the way.
            </div>
            <div className={classes.links}>
                <a href="https://apps.apple.com/" className={classes.link}>
                    <img src={apple} alt="Apple Sotore" className={classes.linkImage}/>
                </a>
                <a href="https://play.google.com/" className={classes.link}>
                    <img src={android} alt="Play market" className={classes.linkImage}/>
                </a>
            </div>
            <img src={phone} className={classes.image} alt="Phone" />
        </div>
    );
});

export default GetStartedToday;
